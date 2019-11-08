import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch:'full'},

    { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
