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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmRegistroComentarioRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const persona_mapper_1 = require("../../../personas/infrastructure/persistence/persona.mapper");
const persona_orm_entity_1 = require("../../../personas/infrastructure/persistence/persona.orm-entity");
const comentario_mapper_1 = require("./comentario.mapper");
const comentario_orm_entity_1 = require("./comentario.orm-entity");
let TypeOrmRegistroComentarioRepository = class TypeOrmRegistroComentarioRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async createUserWithComment(input) {
        return this.dataSource.transaction(async (manager) => {
            const personaEntity = persona_mapper_1.PersonaMapper.toPersistence(input.persona);
            const savedPersona = await manager.save(persona_orm_entity_1.PersonaOrmEntity, personaEntity);
            const comentarioEntity = comentario_mapper_1.ComentarioMapper.toPersistence(input.comentario);
            comentarioEntity.usuarioId = savedPersona.id;
            const savedComentario = await manager.save(comentario_orm_entity_1.ComentarioOrmEntity, comentarioEntity);
            return {
                persona: persona_mapper_1.PersonaMapper.toDomain(savedPersona),
                comentario: comentario_mapper_1.ComentarioMapper.toDomain(savedComentario),
            };
        });
    }
};
exports.TypeOrmRegistroComentarioRepository = TypeOrmRegistroComentarioRepository;
exports.TypeOrmRegistroComentarioRepository = TypeOrmRegistroComentarioRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], TypeOrmRegistroComentarioRepository);
//# sourceMappingURL=typeorm-registro-comentario.repository.js.map