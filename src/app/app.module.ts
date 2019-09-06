import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataEntryFormComponent } from './data-entry-form/data-entry-form.component';
import { DataDisplayFormComponent } from './data-display-form/data-display-form.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    DataEntryFormComponent,
    DataDisplayFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
