import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // constructor(private http: HttpClient, private router: Router) {}
  constructor(private router: Router,private http: HttpClient) {}


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {

    let data = {
      email :email,
      password:password
    }
    return this.http.post(`${environment.base_url}/auth/login`, data);
  }
}
