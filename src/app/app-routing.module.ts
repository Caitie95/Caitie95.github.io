import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: "", component: ListViewComponent},
  {path: "story/:id", component: DetailItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
