import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Persona } from '../../../personas/domain/persona.entity';
import { PersonaMapper } from '../../../personas/infrastructure/persistence/persona.mapper';
import { PersonaOrmEntity } from '../../../personas/infrastructure/persistence/persona.orm-entity';
import { Comentario } from '../../domain/comentario.entity';
import { RegistroComentarioPort } from '../../application/ports/registro-comentario.port';
import { ComentarioMapper } from './comentario.mapper';
import { ComentarioOrmEntity } from './comentario.orm-entity';

@Injectable()
export class TypeOrmRegistroComentarioRepository implements RegistroComentarioPort {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async createUserWithComment(input: {
    persona: Persona;
    comentario: Comentario;
  }): Promise<{
    persona: Persona;
    comentario: Comentario;
  }> {
    return this.dataSource.transaction(async (manager) => {
      const personaEntity = PersonaMapper.toPersistence(input.persona);
      const savedPersona = await manager.save(PersonaOrmEntity, personaEntity);

      const comentarioEntity = ComentarioMapper.toPersistence(input.comentario);
      comentarioEntity.usuarioId = savedPersona.id;

      const savedComentario = await manager.save(
        ComentarioOrmEntity,
        comentarioEntity,
      );

      return {
        persona: PersonaMapper.toDomain(savedPersona),
        comentario: ComentarioMapper.toDomain(savedComentario),
      };
    });
  }
}
