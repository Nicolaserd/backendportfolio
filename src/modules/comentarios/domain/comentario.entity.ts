import { BaseEntity } from '../../../shared/domain/base.entity';

export class Comentario extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    public readonly contenido: string,
    public readonly cantidadLikes: number,
    public readonly usuarioId: string,
  ) {
    super(id, createdAt);
  }
}
