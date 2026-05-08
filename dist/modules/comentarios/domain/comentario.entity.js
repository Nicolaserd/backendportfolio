"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comentario = void 0;
const base_entity_1 = require("../../../shared/domain/base.entity");
class Comentario extends base_entity_1.BaseEntity {
    constructor(id, createdAt, contenido, cantidadLikes, usuarioId) {
        super(id, createdAt);
        this.contenido = contenido;
        this.cantidadLikes = cantidadLikes;
        this.usuarioId = usuarioId;
    }
}
exports.Comentario = Comentario;
//# sourceMappingURL=comentario.entity.js.map