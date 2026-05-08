import { Comentario } from './comentario.entity';
export declare const COMENTARIO_REPOSITORY: unique symbol;
export interface ComentarioRepository {
    create(comentario: Comentario): Promise<Comentario>;
}
