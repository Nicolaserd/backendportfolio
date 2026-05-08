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
exports.ComentariosController = void 0;
const common_1 = require("@nestjs/common");
const add_corazon_dto_1 = require("../dto/add-corazon.dto");
const comentarios_service_1 = require("../comentarios.service");
const create_comentario_dto_1 = require("../dto/create-comentario.dto");
const list_comentarios_query_dto_1 = require("../dto/list-comentarios-query.dto");
let ComentariosController = class ComentariosController {
    constructor(comentariosService) {
        this.comentariosService = comentariosService;
    }
    async count() {
        return this.comentariosService.count();
    }
    async addHeart(body) {
        return this.comentariosService.addHeart(body);
    }
    async findPaginated(query) {
        return this.comentariosService.findPaginated(query);
    }
    async create(body) {
        return this.comentariosService.create(body);
    }
};
exports.ComentariosController = ComentariosController;
__decorate([
    (0, common_1.Get)('total'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComentariosController.prototype, "count", null);
__decorate([
    (0, common_1.Post)('corazones'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_corazon_dto_1.AddCorazonDto]),
    __metadata("design:returntype", Promise)
], ComentariosController.prototype, "addHeart", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_comentarios_query_dto_1.ListComentariosQueryDto]),
    __metadata("design:returntype", Promise)
], ComentariosController.prototype, "findPaginated", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comentario_dto_1.CreateComentarioDto]),
    __metadata("design:returntype", Promise)
], ComentariosController.prototype, "create", null);
exports.ComentariosController = ComentariosController = __decorate([
    (0, common_1.Controller)('comentarios'),
    __metadata("design:paramtypes", [comentarios_service_1.ComentariosService])
], ComentariosController);
//# sourceMappingURL=comentarios.controller.js.map