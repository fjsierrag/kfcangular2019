import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBooksRoutingModule } from './admin-books-routing.module';
import { AdminBooksComponent } from './admin-books.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [AdminBooksComponent, EditComponent, NewComponent],
  imports: [
    CommonModule,
    AdminBooksRoutingModule
  ]
})
export class AdminBooksModule { }
