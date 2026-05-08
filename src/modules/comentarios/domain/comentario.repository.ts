import { Comentario } from './comentario.entity';

export const COMENTARIO_REPOSITORY = Symbol('COMENTARIO_REPOSITORY');

export interface ComentarioRepository {
  create(comentario: Comentario): Promise<Comentario>;
}
