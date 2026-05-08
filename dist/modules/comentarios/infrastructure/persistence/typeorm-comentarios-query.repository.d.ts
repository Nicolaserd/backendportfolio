import { Repository } from 'typeorm';
import { CountComentariosResponse } from '../../application/dto/count-comentarios.response';
import { ListComentariosResponse } from '../../application/dto/list-comentarios.response';
import { ComentariosQueryPort } from '../../application/ports/comentarios-query.port';
import { ComentarioOrmEntity } from './comentario.orm-entity';
export declare class TypeOrmComentariosQueryRepository implements ComentariosQueryPort {
    private readonly comentarioRepository;
    constructor(comentarioRepository: Repository<ComentarioOrmEntity>);
    findPaginated(input: {
        page: number;
        itemsPerPage: number;
    }): Promise<ListComentariosResponse>;
    count(): Promise<CountComentariosResponse>;
}
