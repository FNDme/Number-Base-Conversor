import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueService } from './services/value.service';
import { NumberBaseComponent } from './components/number-base/number-base.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ValueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
