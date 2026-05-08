import { AddCorazonResponse } from '../dto/add-corazon.response';
export declare const COMENTARIO_CORAZON_PORT: unique symbol;
export interface ComentarioCorazonPort {
    addHeart(comentarioId: string): Promise<AddCorazonResponse>;
}
