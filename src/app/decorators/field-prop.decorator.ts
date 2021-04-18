/**
 * @description
 * TODO: Decorator description
 */
export function FieldProperty<T extends object, K extends keyof T>(
  fieldType?: 'control' | 'group' | 'array',
): PropertyDecorator {
  return function(target: Object, propertyKey: string | symbol): void {
    const { name } = target.constructor;
    const keyName = propertyKey;

    const fieldControl = {
      name: propertyKey,
      type: fieldType ?? 'control',
    }
    console.log('[FieldProperty] target', target.constructor.prototype);
    console.log('[FieldProperty] propertyKey', propertyKey);
    console.log('[FieldProperty] constructor name', name);

    if (target.constructor.prototype.hasOwnProperty('fieldsProperty')) {
      target.constructor.prototype.fieldsProperty.push(fieldControl);
    } else {
      target.constructor.prototype.fieldsProperty = [];
      target.constructor.prototype.fieldsProperty.push(fieldControl);
    }

    let value : string;


    const setter = function(newVal: string) {
      value = newVal;
      console.log('[FieldProperty] setter value => ', value);
    };
    Object.defineProperty(target, propertyKey, {
      get(): string {
        console.log('[FieldProperty] getter value => ', value);
        return value;
      },
      set: setter,
      configurable: false,
      enumerable: true,
    });
  }
}
