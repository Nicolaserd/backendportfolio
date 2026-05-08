"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentariosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const colombia_clock_service_1 = require("../../shared/infrastructure/time/colombia-clock.service");
const comentario_orm_entity_1 = require("./infrastructure/persistence/comentario.orm-entity");
const comentarios_controller_1 = require("./presentation/comentarios.controller");
const create_comentario_use_case_1 = require("./application/use-cases/create-comentario.use-case");
const comentarios_service_1 = require("./comentarios.service");
const persona_orm_entity_1 = require("../personas/infrastructure/persistence/persona.orm-entity");
const comentario_corazon_port_1 = require("./application/ports/comentario-corazon.port");
const comentarios_query_port_1 = require("./application/ports/comentarios-query.port");
const registro_comentario_port_1 = require("./application/ports/registro-comentario.port");
const typeorm_comentario_corazon_repository_1 = require("./infrastructure/persistence/typeorm-comentario-corazon.repository");
const typeorm_comentarios_query_repository_1 = require("./infrastructure/persistence/typeorm-comentarios-query.repository");
const typeorm_registro_comentario_repository_1 = require("./infrastructure/persistence/typeorm-registro-comentario.repository");
let ComentariosModule = class ComentariosModule {
};
exports.ComentariosModule = ComentariosModule;
exports.ComentariosModule = ComentariosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([persona_orm_entity_1.PersonaOrmEntity, comentario_orm_entity_1.ComentarioOrmEntity])],
        controllers: [comentarios_controller_1.ComentariosController],
        providers: [
            comentarios_service_1.ComentariosService,
            create_comentario_use_case_1.CreateComentarioUseCase,
            colombia_clock_service_1.ColombiaClockService,
            {
                provide: registro_comentario_port_1.REGISTRO_COMENTARIO_PORT,
                useClass: typeorm_registro_comentario_repository_1.TypeOrmRegistroComentarioRepository,
            },
            {
                provide: comentario_corazon_port_1.COMENTARIO_CORAZON_PORT,
                useClass: typeorm_comentario_corazon_repository_1.TypeOrmComentarioCorazonRepository,
            },
            {
                provide: comentarios_query_port_1.COMENTARIOS_QUERY_PORT,
                useClass: typeorm_comentarios_query_repository_1.TypeOrmComentariosQueryRepository,
            },
        ],
    })
], ComentariosModule);
//# sourceMappingURL=comentarios.module.js.map