import { Directive, forwardRef, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base-component/base.component';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'app-base-form-field',
})
export class BaseFormFieldComponent extends BaseComponent implements OnInit, ControlValueAccessor {
  /** Реактивная форма, для взаимодействия с внешней реактивной формой */
  public basicForm!: FormGroup;
  /** Ссылка на контрол формы */
  public field!: FormControl;
  private onChange = (value: any) => {};
  private onTouched = () => {};
  /** Флаг первых изменений в ЖЦ */
  @Input('name') public fieldName!: string;
  @Input() public readonly: boolean = false;
  @Input() public label: string = '';

  constructor() {
    super();
  }
  /** @ignore */
  public ngOnInit(): void {
    this.basicForm = new FormGroup({
      [this.fieldName]: new FormControl(),
    });
  }

  /** Обработка события установки фокуса */
  public onFocus(): void {
    this.onTouched();
  }

  /** Обработка события изменения значения */
  public onChangeValue(): void {
    this.onChange(this.basicForm.controls[this.fieldName].value); // уведомить Forms API
    this.onTouched();
  }

  writeValue(value: any): void {
    this.basicForm.controls[this.fieldName].setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.basicForm.disable() : this.basicForm.enable();
  }

}
