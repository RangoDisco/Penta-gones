import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindComponent } from './find/find.component';
import { MyContactsPageComponent } from './pages/my-contacts-page/my-contacts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FindComponent,
    MyContactsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
