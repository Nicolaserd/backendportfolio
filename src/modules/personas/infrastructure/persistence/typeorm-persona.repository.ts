import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from '../../domain/persona.entity';
import { PersonaRepository } from '../../domain/persona.repository';
import { PersonaMapper } from './persona.mapper';
import { PersonaOrmEntity } from './persona.orm-entity';

@Injectable()
export class TypeOrmPersonaRepository implements PersonaRepository {
  constructor(
    @InjectRepository(PersonaOrmEntity)
    private readonly repository: Repository<PersonaOrmEntity>,
  ) {}

  async create(persona: Persona): Promise<Persona> {
    const entity = PersonaMapper.toPersistence(persona);
    const savedEntity = await this.repository.save(entity);
    return PersonaMapper.toDomain(savedEntity);
  }
}
