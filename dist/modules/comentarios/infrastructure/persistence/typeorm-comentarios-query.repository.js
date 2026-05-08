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
exports.TypeOrmComentariosQueryRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comentario_orm_entity_1 = require("./comentario.orm-entity");
let TypeOrmComentariosQueryRepository = class TypeOrmComentariosQueryRepository {
    constructor(comentarioRepository) {
        this.comentarioRepository = comentarioRepository;
    }
    async findPaginated(input) {
        const skip = (input.page - 1) * input.itemsPerPage;
        const [comentarios, totalItems] = await this.comentarioRepository.findAndCount({
            relations: {
                usuario: true,
            },
            order: {
                createdAt: 'DESC',
            },
            skip,
            take: input.itemsPerPage,
        });
        return {
            page: input.page,
            itemsPerPage: input.itemsPerPage,
            totalItems,
            totalPages: Math.ceil(totalItems / input.itemsPerPage),
            items: comentarios.map((comentario) => ({
                idUsuario: comentario.usuario.id,
                idComentario: comentario.id,
                nombreUsuario: comentario.usuario.nombre,
                corazonesRecibidos: comentario.cantidadLikes,
                comentario: comentario.contenido,
            })),
        };
    }
    async count() {
        const totalComentarios = await this.comentarioRepository.count();
        return {
            totalComentarios,
        };
    }
};
exports.TypeOrmComentariosQueryRepository = TypeOrmComentariosQueryRepository;
exports.TypeOrmComentariosQueryRepository = TypeOrmComentariosQueryRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comentario_orm_entity_1.ComentarioOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeOrmComentariosQueryRepository);
//# sourceMappingURL=typeorm-comentarios-query.repository.js.map