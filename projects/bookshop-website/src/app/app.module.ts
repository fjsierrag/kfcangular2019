import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './global/header/header.component';
import {LogoComponent} from './global/logo/logo.component';
import {SearchComponent} from './global/search/search.component';
import {UtilNavComponent} from './global/util-nav/util-nav.component';
import {MenuComponent} from './global/menu/menu.component';
import {FooterComponent} from './global/footer/footer.component';
import {HomeModule} from "./home/home.module";
import {NewsModule} from "./news/news.module";
import {SecurityModule} from "./security/security.module";
import {TokenInterceptor} from "./interceptors/http-interceptor";
import {initUserProfile} from "./initializers/user.profile.initializer";
import {AuthService} from "./services/auth.service";
import {ErrorInterceptor} from "./interceptors/error-interceptor";
import { AdminBooksComponent } from './admin-books/admin-books.component';
import {AdminBooksModule} from "./admin-books/admin-books.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        SearchComponent,
        UtilNavComponent,
        MenuComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule,
        HomeModule,
        NewsModule,
        SecurityModule,
        AdminBooksModule
    ],
    providers: [{
        provide: APP_INITIALIZER,
        useFactory: initUserProfile,
        multi:true,
        deps: [AuthService]
    },{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi:true
    },{
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi:true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
