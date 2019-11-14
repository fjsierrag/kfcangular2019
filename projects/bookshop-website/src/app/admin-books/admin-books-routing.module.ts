import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminBooksComponent} from "./admin-books.component";

const routes: Routes = [
  {path: '', component: AdminBooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBooksRoutingModule { }
