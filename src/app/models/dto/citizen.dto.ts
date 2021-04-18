import { FieldProperty } from '../../decorators/field-prop.decorator';
import { FieldsForm } from '../../decorators/fields-form.decorator';

@FieldsForm(4,5,6)
class CitizenDto {
  firstname?: string = undefined;

  @FieldProperty()
  surname?: string = undefined;

  @FieldProperty('array')
  patronymic?: string = undefined;
}

export {
  CitizenDto,
};
