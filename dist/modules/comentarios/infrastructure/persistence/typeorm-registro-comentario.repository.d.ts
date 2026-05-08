import { DataSource } from 'typeorm';
import { Persona } from '../../../personas/domain/persona.entity';
import { Comentario } from '../../domain/comentario.entity';
import { RegistroComentarioPort } from '../../application/ports/registro-comentario.port';
export declare class TypeOrmRegistroComentarioRepository implements RegistroComentarioPort {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    createUserWithComment(input: {
        persona: Persona;
        comentario: Comentario;
    }): Promise<{
        persona: Persona;
        comentario: Comentario;
    }>;
}
