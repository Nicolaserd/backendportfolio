import { Persona } from '../../../personas/domain/persona.entity';
import { Comentario } from '../../domain/comentario.entity';
export declare const REGISTRO_COMENTARIO_PORT: unique symbol;
export interface RegistroComentarioPort {
    createUserWithComment(input: {
        persona: Persona;
        comentario: Comentario;
    }): Promise<{
        persona: Persona;
        comentario: Comentario;
    }>;
}
