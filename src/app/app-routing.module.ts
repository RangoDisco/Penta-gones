import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyContactsPageComponent } from './pages/my-contacts-page/my-contacts-page.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  { path: '', component: SelectionComponent },
  { path: 'contacts', component: MyContactsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
