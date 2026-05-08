import { PersonaOrmEntity } from '../../../personas/infrastructure/persistence/persona.orm-entity';
export declare class ComentarioOrmEntity {
    id: string;
    contenido: string;
    cantidadLikes: number;
    createdAt: Date;
    usuarioId: string;
    usuario: PersonaOrmEntity;
}
