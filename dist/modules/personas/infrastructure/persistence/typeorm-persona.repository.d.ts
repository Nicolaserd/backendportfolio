import { Repository } from 'typeorm';
import { Persona } from '../../domain/persona.entity';
import { PersonaRepository } from '../../domain/persona.repository';
import { PersonaOrmEntity } from './persona.orm-entity';
export declare class TypeOrmPersonaRepository implements PersonaRepository {
    private readonly repository;
    constructor(repository: Repository<PersonaOrmEntity>);
    create(persona: Persona): Promise<Persona>;
}
