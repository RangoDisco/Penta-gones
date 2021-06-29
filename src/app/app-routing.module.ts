import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyContactsPageComponent } from './pages/my-contacts-page/my-contacts-page.component';

const routes: Routes = [
  { path: 'contacts', component: MyContactsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
