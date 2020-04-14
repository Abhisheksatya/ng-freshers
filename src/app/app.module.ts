import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatabindingModule } from './01_databinding/databinding.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DatabindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
