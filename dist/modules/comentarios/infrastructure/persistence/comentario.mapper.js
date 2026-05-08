"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentarioMapper = void 0;
const comentario_entity_1 = require("../../domain/comentario.entity");
const comentario_orm_entity_1 = require("./comentario.orm-entity");
class ComentarioMapper {
    static toPersistence(comentario) {
        const entity = new comentario_orm_entity_1.ComentarioOrmEntity();
        entity.id = comentario.id;
        entity.contenido = comentario.contenido;
        entity.cantidadLikes = comentario.cantidadLikes;
        entity.createdAt = comentario.createdAt;
        entity.usuarioId = comentario.usuarioId;
        return entity;
    }
    static toDomain(entity) {
        return new comentario_entity_1.Comentario(entity.id, entity.createdAt, entity.contenido, entity.cantidadLikes, entity.usuarioId);
    }
}
exports.ComentarioMapper = ComentarioMapper;
//# sourceMappingURL=comentario.mapper.js.map