import { AddCorazonResponse } from './application/dto/add-corazon.response';
import { CountComentariosResponse } from './application/dto/count-comentarios.response';
import { CreateComentarioResponse } from './application/dto/create-comentario.response';
import { ListComentariosResponse } from './application/dto/list-comentarios.response';
import { ComentarioCorazonPort } from './application/ports/comentario-corazon.port';
import { ComentariosQueryPort } from './application/ports/comentarios-query.port';
import { CreateComentarioUseCase } from './application/use-cases/create-comentario.use-case';
import { AddCorazonDto } from './dto/add-corazon.dto';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { ListComentariosQueryDto } from './dto/list-comentarios-query.dto';
export declare class ComentariosService {
    private readonly createComentarioUseCase;
    private readonly comentarioCorazonPort;
    private readonly comentariosQueryPort;
    constructor(createComentarioUseCase: CreateComentarioUseCase, comentarioCorazonPort: ComentarioCorazonPort, comentariosQueryPort: ComentariosQueryPort);
    create(createComentarioDto: CreateComentarioDto): Promise<CreateComentarioResponse>;
    findPaginated(query: ListComentariosQueryDto): Promise<ListComentariosResponse>;
    addHeart(body: AddCorazonDto): Promise<AddCorazonResponse>;
    count(): Promise<CountComentariosResponse>;
}
