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
exports.ComentariosService = void 0;
const common_1 = require("@nestjs/common");
const comentario_corazon_port_1 = require("./application/ports/comentario-corazon.port");
const comentarios_query_port_1 = require("./application/ports/comentarios-query.port");
const create_comentario_use_case_1 = require("./application/use-cases/create-comentario.use-case");
let ComentariosService = class ComentariosService {
    constructor(createComentarioUseCase, comentarioCorazonPort, comentariosQueryPort) {
        this.createComentarioUseCase = createComentarioUseCase;
        this.comentarioCorazonPort = comentarioCorazonPort;
        this.comentariosQueryPort = comentariosQueryPort;
    }
    async create(createComentarioDto) {
        return this.createComentarioUseCase.execute({
            nombreUsuario: createComentarioDto.nombre_usuario,
            comentario: createComentarioDto.comentario,
            correo: createComentarioDto.correo,
        });
    }
    async findPaginated(query) {
        return this.comentariosQueryPort.findPaginated({
            page: query.page,
            itemsPerPage: query.itemsPorPagina,
        });
    }
    async addHeart(body) {
        return this.comentarioCorazonPort.addHeart(body.comentario_id);
    }
    async count() {
        return this.comentariosQueryPort.count();
    }
};
exports.ComentariosService = ComentariosService;
exports.ComentariosService = ComentariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(comentario_corazon_port_1.COMENTARIO_CORAZON_PORT)),
    __param(2, (0, common_1.Inject)(comentarios_query_port_1.COMENTARIOS_QUERY_PORT)),
    __metadata("design:paramtypes", [create_comentario_use_case_1.CreateComentarioUseCase, Object, Object])
], ComentariosService);
//# sourceMappingURL=comentarios.service.js.map