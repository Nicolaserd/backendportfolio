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
exports.TypeOrmComentarioCorazonRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comentario_orm_entity_1 = require("./comentario.orm-entity");
let TypeOrmComentarioCorazonRepository = class TypeOrmComentarioCorazonRepository {
    constructor(comentarioRepository) {
        this.comentarioRepository = comentarioRepository;
    }
    async addHeart(comentarioId) {
        const updateResult = await this.comentarioRepository
            .createQueryBuilder()
            .update(comentario_orm_entity_1.ComentarioOrmEntity)
            .set({
            cantidadLikes: () => '"cantidad_likes" + 1',
        })
            .where('id = :comentarioId', { comentarioId })
            .returning(['id', 'cantidad_likes'])
            .execute();
        if (!updateResult.affected) {
            throw new common_1.NotFoundException('No existe un comentario con ese id.');
        }
        const updatedComentario = updateResult.raw[0];
        return {
            comentarioId: updatedComentario.id,
            corazonesRecibidos: Number(updatedComentario.cantidad_likes),
        };
    }
};
exports.TypeOrmComentarioCorazonRepository = TypeOrmComentarioCorazonRepository;
exports.TypeOrmComentarioCorazonRepository = TypeOrmComentarioCorazonRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comentario_orm_entity_1.ComentarioOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeOrmComentarioCorazonRepository);
//# sourceMappingURL=typeorm-comentario-corazon.repository.js.map