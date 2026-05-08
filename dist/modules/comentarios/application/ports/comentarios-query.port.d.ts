import { ListComentariosResponse } from '../dto/list-comentarios.response';
import { CountComentariosResponse } from '../dto/count-comentarios.response';
export declare const COMENTARIOS_QUERY_PORT: unique symbol;
export interface ComentariosQueryPort {
    findPaginated(input: {
        page: number;
        itemsPerPage: number;
    }): Promise<ListComentariosResponse>;
    count(): Promise<CountComentariosResponse>;
}
