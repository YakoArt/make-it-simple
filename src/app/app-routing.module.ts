import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPageComponent } from './components/default-page/default-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DefaultPageComponent,
      },
      {
        path: 'rf-example',
        loadChildren: () => import('src/app/modules/rf-example/rf-example.module').then(m => m.RfExampleModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
