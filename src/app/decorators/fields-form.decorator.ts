/**
 * @description
 * TODO: Decorator description
 */
export function FieldsForm(...args: any[]) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log('[FieldsForm] args =>', args);
    console.log('[FieldsForm] constructor =>', constructor);
    console.log('[FieldsForm] prototype =>', constructor.prototype);

    return class extends constructor {
      reportingURL = () => {
        console.log('[FieldsForm] this =>', this);
      };
    }
  }
}

