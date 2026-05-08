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
exports.CreateComentarioRequestDto = void 0;
const class_validator_1 = require("class-validator");
const no_script_decorator_1 = require("../../../../shared/presentation/validators/no-script.decorator");
class CreateComentarioRequestDto {
}
exports.CreateComentarioRequestDto = CreateComentarioRequestDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'nombre_usuario debe ser texto.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'nombre_usuario es obligatorio.' }),
    (0, class_validator_1.MinLength)(2, { message: 'nombre_usuario debe tener al menos 2 caracteres.' }),
    (0, class_validator_1.MaxLength)(120, {
        message: 'nombre_usuario no puede exceder 120 caracteres.',
    }),
    (0, no_script_decorator_1.NoScript)({ message: 'nombre_usuario contiene contenido no permitido.' }),
    __metadata("design:type", String)
], CreateComentarioRequestDto.prototype, "nombre_usuario", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'comentario debe ser texto.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'comentario es obligatorio.' }),
    (0, class_validator_1.MinLength)(3, { message: 'comentario debe tener al menos 3 caracteres.' }),
    (0, class_validator_1.MaxLength)(1000, { message: 'comentario no puede exceder 1000 caracteres.' }),
    (0, no_script_decorator_1.NoScript)({ message: 'comentario contiene contenido no permitido.' }),
    __metadata("design:type", String)
], CreateComentarioRequestDto.prototype, "comentario", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'correo debe ser texto.' }),
    (0, class_validator_1.IsEmail)({}, { message: 'correo debe tener un formato valido.' }),
    (0, class_validator_1.MaxLength)(180, { message: 'correo no puede exceder 180 caracteres.' }),
    (0, no_script_decorator_1.NoScript)({ message: 'correo contiene contenido no permitido.' }),
    __metadata("design:type", String)
], CreateComentarioRequestDto.prototype, "correo", void 0);
//# sourceMappingURL=create-comentario-request.dto.js.map