import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}
    
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-Rapidapi-Key': 'e037efce75msh707cf9cc231d92bp104206jsn47c91ab9fd7a',
                'X-Rapidapi-Host': 'rawg-video-games-database.p.rapidapi.com',
        },
        setParams: {
            key: 'd9e6ecbe51e8499fa9eb9182843d586b',
        }
    });
    return next.handle(req);
    }
}