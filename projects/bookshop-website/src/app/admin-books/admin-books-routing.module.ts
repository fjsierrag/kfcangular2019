import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminBooksComponent} from "./admin-books.component";
import {EditComponent} from "./edit/edit.component";
import {BookDetailComponent} from "../books/book-detail/book-detail.component";
import {NewComponent} from "./new/new.component";

const routes: Routes = [
  {path: '', component: AdminBooksComponent},
  {path: 'edit/:id', component: EditComponent},
  { path: 'create', component: NewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBooksRoutingModule { }
