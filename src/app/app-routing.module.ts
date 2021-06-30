import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactedComponent } from './contacted/contacted.component';
import { DeletedPageComponent } from './deleted-page/deleted-page.component';
import { FindComponent } from './find/find.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectionComponent } from './selection/selection.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'select', component: SelectionComponent },
  { path: 'find', component: FindComponent },
  { path: 'contacted', component: ContactedComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'deleted', component: DeletedPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
