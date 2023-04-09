import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable()
export class UserInterceptor implements HttpInterceptor {

    private keyUser:string="user-request";
    private user:string="sharon.ramirez";

    intercept (req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        let resqNew= req.clone ({
            headers:req.headers.append(this.keyUser, this.user)
        });
        return next.handle(resqNew)
    }

}