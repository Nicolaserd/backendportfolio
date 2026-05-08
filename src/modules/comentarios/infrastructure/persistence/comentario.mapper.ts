import { Comentario } from '../../domain/comentario.entity';
import { ComentarioOrmEntity } from './comentario.orm-entity';

export class ComentarioMapper {
  static toPersistence(comentario: Comentario): ComentarioOrmEntity {
    const entity = new ComentarioOrmEntity();
    entity.id = comentario.id;
    entity.contenido = comentario.contenido;
    entity.cantidadLikes = comentario.cantidadLikes;
    entity.createdAt = comentario.createdAt;
    entity.usuarioId = comentario.usuarioId;
    return entity;
  }

  static toDomain(entity: ComentarioOrmEntity): Comentario {
    return new Comentario(
      entity.id,
      entity.createdAt,
      entity.contenido,
      entity.cantidadLikes,
      entity.usuarioId,
    );
  }
}
