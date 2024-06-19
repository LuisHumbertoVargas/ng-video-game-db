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
                'X-RapidAPI-Key': '4d2fd06bb0mshd240c3ae8285e0ep163b17jsn9456c953005c',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        },
        setParams: {
            key: '4d2fd06bb0mshd240c3ae8285e0ep163b17jsn9456c953005c'
        }
    });
        return next.handle(req);
    }
}