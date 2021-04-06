import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './components';
import { BaseFormFieldComponent } from './components';
import { MediaQueryDirective } from './directives/media-query.directive';

/** Все компоненты и пайпы размещенные в данном модуле */
const COMPONENTS = [
  BaseComponent,
  BaseFormFieldComponent,
];

const DIRECTIVES = [
  MediaQueryDirective,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [COMPONENTS, DIRECTIVES],
  exports: [COMPONENTS, DIRECTIVES],
})
export class AppCommonModule { }
