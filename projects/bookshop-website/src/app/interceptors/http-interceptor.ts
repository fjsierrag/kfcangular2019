import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class TokenInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token=localStorage.getItem('AUTH-TOKEN');
        if(token){
            const newReq=req.clone({
               setHeaders:{
                   'Authorization': `Bearer ${token}`
               }
            });
            return next.handle(newReq);
        }
        return next.handle(req);
    }

}