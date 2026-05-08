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
exports.CreateComentarioUseCase = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const colombia_clock_service_1 = require("../../../../shared/infrastructure/time/colombia-clock.service");
const persona_entity_1 = require("../../../personas/domain/persona.entity");
const comentario_entity_1 = require("../../domain/comentario.entity");
const registro_comentario_port_1 = require("../ports/registro-comentario.port");
let CreateComentarioUseCase = class CreateComentarioUseCase {
    constructor(registroComentarioPort, clock) {
        this.registroComentarioPort = registroComentarioPort;
        this.clock = clock;
    }
    async execute(command) {
        const createdAt = this.clock.now();
        const persona = new persona_entity_1.Persona((0, crypto_1.randomUUID)(), createdAt, command.nombreUsuario.trim(), command.correo?.trim() || null);
        const comentario = new comentario_entity_1.Comentario((0, crypto_1.randomUUID)(), createdAt, command.comentario.trim(), 0, persona.id);
        const registro = await this.registroComentarioPort.createUserWithComment({
            persona,
            comentario,
        });
        return {
            usuario: {
                id: registro.persona.id,
                nombre: registro.persona.nombre,
                correo: registro.persona.correo,
            },
            comentario: {
                id: registro.comentario.id,
                contenido: registro.comentario.contenido,
                cantidadLikes: registro.comentario.cantidadLikes,
                fechaCreacion: registro.comentario.createdAt.toLocaleString('sv-SE', {
                    timeZone: 'America/Bogota',
                }),
            },
        };
    }
};
exports.CreateComentarioUseCase = CreateComentarioUseCase;
exports.CreateComentarioUseCase = CreateComentarioUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(registro_comentario_port_1.REGISTRO_COMENTARIO_PORT)),
    __param(1, (0, common_1.Inject)(colombia_clock_service_1.ColombiaClockService)),
    __metadata("design:paramtypes", [Object, Object])
], CreateComentarioUseCase);
//# sourceMappingURL=create-comentario.use-case.js.map