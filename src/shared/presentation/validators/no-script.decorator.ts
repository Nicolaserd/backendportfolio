import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

const SCRIPT_PATTERN =
  /<\s*script\b|javascript:|onerror\s*=|onload\s*=|eval\s*\(|document\.cookie/iu;

export function NoScript(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'NoScript',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: unknown): boolean {
          if (typeof value !== 'string') {
            return false;
          }

          return !SCRIPT_PATTERN.test(value);
        },
        defaultMessage(args: ValidationArguments): string {
          return `${args.property} contiene contenido no permitido.`;
        },
      },
    });
  };
}
