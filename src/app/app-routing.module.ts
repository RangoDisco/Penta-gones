import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindComponent } from './find/find.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'finderr', component: FindComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
