"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoScript = NoScript;
const class_validator_1 = require("class-validator");
const SCRIPT_PATTERN = /<\s*script\b|javascript:|onerror\s*=|onload\s*=|eval\s*\(|document\.cookie/iu;
function NoScript(validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'NoScript',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate(value) {
                    if (typeof value !== 'string') {
                        return false;
                    }
                    return !SCRIPT_PATTERN.test(value);
                },
                defaultMessage(args) {
                    return `${args.property} contiene contenido no permitido.`;
                },
            },
        });
    };
}
//# sourceMappingURL=no-script.decorator.js.map