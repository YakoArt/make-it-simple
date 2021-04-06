import { Component, forwardRef } from '@angular/core';
import { BaseFormFieldComponent } from '../../../app-common/components';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ya-input',
  templateUrl: './ya-input.component.html',
  styleUrls: ['./ya-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YaInputComponent),
      multi: true
    },
    /*{
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => YaInputComponent),
      multi: true,
    },*/
  ],
})
export class YaInputComponent extends BaseFormFieldComponent {
  constructor() {
    super();
  }
}
