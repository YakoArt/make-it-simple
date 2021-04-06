import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiKitModule } from './modules/ui-kit/ui-kit.module';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppCommonModule } from './modules/app-common/app-common.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiKitModule,
    ReactiveFormsModule,
    AppCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
