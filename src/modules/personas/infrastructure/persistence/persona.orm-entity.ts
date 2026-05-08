import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ComentarioOrmEntity } from '../../../comentarios/infrastructure/persistence/comentario.orm-entity';

@Entity({ name: 'usuarios' })
export class PersonaOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'nombre', type: 'varchar', length: 120 })
  nombre!: string;

  @Column({ name: 'correo', type: 'varchar', length: 180, nullable: true })
  correo!: string | null;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => "timezone('America/Bogota', now())",
  })
  createdAt!: Date;

  @OneToMany(() => ComentarioOrmEntity, (comentario) => comentario.usuario)
  comentarios!: ComentarioOrmEntity[];
}
