import { Comentario } from '../../domain/comentario.entity';
import { ComentarioOrmEntity } from './comentario.orm-entity';
export declare class ComentarioMapper {
    static toPersistence(comentario: Comentario): ComentarioOrmEntity;
    static toDomain(entity: ComentarioOrmEntity): Comentario;
}
