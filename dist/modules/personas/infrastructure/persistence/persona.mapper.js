"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaMapper = void 0;
const persona_entity_1 = require("../../domain/persona.entity");
const persona_orm_entity_1 = require("./persona.orm-entity");
class PersonaMapper {
    static toPersistence(persona) {
        const entity = new persona_orm_entity_1.PersonaOrmEntity();
        entity.id = persona.id;
        entity.nombre = persona.nombre;
        entity.correo = persona.correo;
        entity.createdAt = persona.createdAt;
        return entity;
    }
    static toDomain(entity) {
        return new persona_entity_1.Persona(entity.id, entity.createdAt, entity.nombre, entity.correo);
    }
}
exports.PersonaMapper = PersonaMapper;
//# sourceMappingURL=persona.mapper.js.map