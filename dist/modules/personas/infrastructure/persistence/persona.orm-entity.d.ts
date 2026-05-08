import { ComentarioOrmEntity } from '../../../comentarios/infrastructure/persistence/comentario.orm-entity';
export declare class PersonaOrmEntity {
    id: string;
    nombre: string;
    correo: string | null;
    createdAt: Date;
    comentarios: ComentarioOrmEntity[];
}
