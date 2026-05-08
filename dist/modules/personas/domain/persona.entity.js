"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const base_entity_1 = require("../../../shared/domain/base.entity");
class Persona extends base_entity_1.BaseEntity {
    constructor(id, createdAt, nombre, correo) {
        super(id, createdAt);
        this.nombre = nombre;
        this.correo = correo;
    }
}
exports.Persona = Persona;
//# sourceMappingURL=persona.entity.js.map