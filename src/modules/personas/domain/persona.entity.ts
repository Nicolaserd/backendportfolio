import { BaseEntity } from '../../../shared/domain/base.entity';

export class Persona extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    public readonly nombre: string,
    public readonly correo: string | null,
  ) {
    super(id, createdAt);
  }
}
