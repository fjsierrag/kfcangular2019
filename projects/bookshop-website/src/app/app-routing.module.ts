import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: "home", pathMatch: "full"},
    {path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)},
    {path: 'admin-books', loadChildren: () => import('./admin-books/admin-books.module').then(m => m.AdminBooksModule)},
    {path: 'cart', loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
