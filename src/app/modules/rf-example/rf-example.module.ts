import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { RfExampleRoutingModule } from './rf-example-routing.module';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RfExampleRoutingModule,
  ]
})
export class RfExampleModule { }
