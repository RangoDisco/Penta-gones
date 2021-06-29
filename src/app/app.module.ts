import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindPageComponent } from './pages/find-page/find-page.component';
import { FreelanceProfileComponent } from './components/freelance-profile/freelance-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FindPageComponent,
    FreelanceProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
