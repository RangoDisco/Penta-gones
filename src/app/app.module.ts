import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindComponent } from './find/find.component';
import { SelectionComponent } from './selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    FindComponent
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
