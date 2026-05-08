import { AddCorazonDto } from '../dto/add-corazon.dto';
import { ComentariosService } from '../comentarios.service';
import { CreateComentarioDto } from '../dto/create-comentario.dto';
import { ListComentariosQueryDto } from '../dto/list-comentarios-query.dto';
export declare class ComentariosController {
    private readonly comentariosService;
    constructor(comentariosService: ComentariosService);
    count(): Promise<import("../application/dto/count-comentarios.response").CountComentariosResponse>;
    addHeart(body: AddCorazonDto): Promise<import("../application/dto/add-corazon.response").AddCorazonResponse>;
    findPaginated(query: ListComentariosQueryDto): Promise<import("../application/dto/list-comentarios.response").ListComentariosResponse>;
    create(body: CreateComentarioDto): Promise<import("../application/dto/create-comentario.response").CreateComentarioResponse>;
}
