import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {catchError} from "rxjs/operators";
import {AuthService} from "../services/auth.service";

@Injectable({
    providedIn:'root'
})
export class ErrorInterceptor implements HttpInterceptor{

    constructor(private authService:AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((err)=>{
            if(err.status===401){
                this.authService.logout();
                location.href ='/login';
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}