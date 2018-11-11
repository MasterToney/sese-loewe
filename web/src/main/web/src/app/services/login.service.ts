import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


class LoginInformation {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
    ) {
      this.apiUrl = baseUrl;
    }

  login(username: string, password: string): Observable<boolean> {
    const li = new LoginInformation();
    li.username = username;
    li.password = password;

    localStorage.setItem('login', JSON.stringify(li));

    return new Observable((observer) => {
      this.http.get(`${ this.apiUrl}/api/users/me`, { responseType: 'text' })
      .subscribe(
          success => { observer.next(true); observer.complete(); },
          error => { observer.next(false); observer.complete(); }
        );
    });
  }

  isLoggedIn(): boolean {
    const t = localStorage.getItem('login');
    return t !== undefined && t !== null;
  }

  logOut() {
    localStorage.removeItem('login');
  }

  getUserName(): string {
    const t = localStorage.getItem('login');
    if (t !== undefined && t !== null) {
      return JSON.parse(t)['username'];
    }

    return null;
  }

  getPassword(): string {
    const t = localStorage.getItem('login');
    if (t !== undefined && t !== null) {
      return JSON.parse(t)['password'];
    }

    return null;
  }
}
