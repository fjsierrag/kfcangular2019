import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminBooksRoutingModule} from './admin-books-routing.module';
import {AdminBooksComponent} from './admin-books.component';
import {EditComponent} from './edit/edit.component';
import {NewComponent} from './new/new.component';
import {AdminBookComponent} from './admin-book/admin-book.component';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [AdminBooksComponent, EditComponent, NewComponent, AdminBookComponent],
    imports: [
        CommonModule,
        AdminBooksRoutingModule,
        FormsModule
    ]
})
export class AdminBooksModule {
}
