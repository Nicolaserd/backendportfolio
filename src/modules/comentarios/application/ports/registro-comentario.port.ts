import { Persona } from '../../../personas/domain/persona.entity';
import { Comentario } from '../../domain/comentario.entity';

export const REGISTRO_COMENTARIO_PORT = Symbol('REGISTRO_COMENTARIO_PORT');

export interface RegistroComentarioPort {
  createUserWithComment(input: {
    persona: Persona;
    comentario: Comentario;
  }): Promise<{
    persona: Persona;
    comentario: Comentario;
  }>;
}
