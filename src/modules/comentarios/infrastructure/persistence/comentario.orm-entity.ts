import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PersonaOrmEntity } from '../../../personas/infrastructure/persistence/persona.orm-entity';

@Entity({ name: 'comentarios' })
export class ComentarioOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'contenido', type: 'text' })
  contenido!: string;

  @Column({ name: 'cantidad_likes', type: 'integer', default: 0 })
  cantidadLikes!: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => "timezone('America/Bogota', now())",
  })
  createdAt!: Date;

  @Column({ name: 'usuario_id', type: 'uuid' })
  usuarioId!: string;

  @ManyToOne(() => PersonaOrmEntity, (usuario) => usuario.comentarios, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario!: PersonaOrmEntity;
}
