import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FindComponent } from './find/find.component';
import { SelectionComponent } from './selection/selection.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactedComponent } from './contacted/contacted.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { DeletedPageComponent } from './deleted-page/deleted-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    AppComponent, FindComponent, SelectionComponent, PageNotFoundComponent, ContactedComponent, ServicesPageComponent, DeletedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
