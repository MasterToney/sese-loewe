import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const h = btoa(`${this.loginService.getUserName()}:${this.loginService.getPassword()}`);

    req = req.clone( {
      setHeaders: {
        Authorization: `Basic ${h}`
      }
    });

    return next.handle(req);
  }
}
