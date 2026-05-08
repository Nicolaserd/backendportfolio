import { Repository } from 'typeorm';
import { AddCorazonResponse } from '../../application/dto/add-corazon.response';
import { ComentarioCorazonPort } from '../../application/ports/comentario-corazon.port';
import { ComentarioOrmEntity } from './comentario.orm-entity';
export declare class TypeOrmComentarioCorazonRepository implements ComentarioCorazonPort {
    private readonly comentarioRepository;
    constructor(comentarioRepository: Repository<ComentarioOrmEntity>);
    addHeart(comentarioId: string): Promise<AddCorazonResponse>;
}
