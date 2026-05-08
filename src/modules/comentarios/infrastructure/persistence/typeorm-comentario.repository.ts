import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentario } from '../../domain/comentario.entity';
import { ComentarioRepository } from '../../domain/comentario.repository';
import { ComentarioMapper } from './comentario.mapper';
import { ComentarioOrmEntity } from './comentario.orm-entity';

@Injectable()
export class TypeOrmComentarioRepository implements ComentarioRepository {
  constructor(
    @InjectRepository(ComentarioOrmEntity)
    private readonly repository: Repository<ComentarioOrmEntity>,
  ) {}

  async create(comentario: Comentario): Promise<Comentario> {
    const entity = ComentarioMapper.toPersistence(comentario);
    const savedEntity = await this.repository.save(entity);
    return ComentarioMapper.toDomain(savedEntity);
  }
}
