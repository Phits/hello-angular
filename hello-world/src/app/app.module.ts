import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { BindingExamplesComponent } from './binding-examples/binding-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    BindingExamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
