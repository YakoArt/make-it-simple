import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YaInputComponent } from './components/ya-input/ya-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [YaInputComponent],
  exports: [
    YaInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class UiKitModule { }
