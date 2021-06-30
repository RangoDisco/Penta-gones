import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactedComponent } from './contacted/contacted.component';
import { FindComponent } from './find/find.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'find', component: FindComponent },
  { path: 'contacted', component: ContactedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
