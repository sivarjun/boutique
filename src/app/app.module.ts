import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
