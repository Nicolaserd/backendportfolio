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
exports.PersonaOrmEntity = void 0;
const typeorm_1 = require("typeorm");
const comentario_orm_entity_1 = require("../../../comentarios/infrastructure/persistence/comentario.orm-entity");
let PersonaOrmEntity = class PersonaOrmEntity {
};
exports.PersonaOrmEntity = PersonaOrmEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PersonaOrmEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre', type: 'varchar', length: 120 }),
    __metadata("design:type", String)
], PersonaOrmEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'correo', type: 'varchar', length: 180, nullable: true }),
    __metadata("design:type", Object)
], PersonaOrmEntity.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamptz',
        default: () => "timezone('America/Bogota', now())",
    }),
    __metadata("design:type", Date)
], PersonaOrmEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comentario_orm_entity_1.ComentarioOrmEntity, (comentario) => comentario.usuario),
    __metadata("design:type", Array)
], PersonaOrmEntity.prototype, "comentarios", void 0);
exports.PersonaOrmEntity = PersonaOrmEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'usuarios' })
], PersonaOrmEntity);
//# sourceMappingURL=persona.orm-entity.js.map