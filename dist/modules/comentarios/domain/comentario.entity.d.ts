import { BaseEntity } from '../../../shared/domain/base.entity';
export declare class Comentario extends BaseEntity {
    readonly contenido: string;
    readonly cantidadLikes: number;
    readonly usuarioId: string;
    constructor(id: string, createdAt: Date, contenido: string, cantidadLikes: number, usuarioId: string);
}
