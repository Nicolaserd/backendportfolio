import { AddCorazonResponse } from '../dto/add-corazon.response';

export const COMENTARIO_CORAZON_PORT = Symbol('COMENTARIO_CORAZON_PORT');

export interface ComentarioCorazonPort {
  addHeart(comentarioId: string): Promise<AddCorazonResponse>;
}
