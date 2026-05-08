"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentarioOrmEntity = void 0;
const typeorm_1 = require("typeorm");
const persona_orm_entity_1 = require("../../../personas/infrastructure/persistence/persona.orm-entity");
let ComentarioOrmEntity = class ComentarioOrmEntity {
};
exports.ComentarioOrmEntity = ComentarioOrmEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ComentarioOrmEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contenido', type: 'text' }),
    __metadata("design:type", String)
], ComentarioOrmEntity.prototype, "contenido", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cantidad_likes', type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], ComentarioOrmEntity.prototype, "cantidadLikes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamptz',
        default: () => "timezone('America/Bogota', now())",
    }),
    __metadata("design:type", Date)
], ComentarioOrmEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_id', type: 'uuid' }),
    __metadata("design:type", String)
], ComentarioOrmEntity.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => persona_orm_entity_1.PersonaOrmEntity, (usuario) => usuario.comentarios, {
        nullable: false,
        onDelete: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", persona_orm_entity_1.PersonaOrmEntity)
], ComentarioOrmEntity.prototype, "usuario", void 0);
exports.ComentarioOrmEntity = ComentarioOrmEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'comentarios' })
], ComentarioOrmEntity);
//# sourceMappingURL=comentario.orm-entity.js.map