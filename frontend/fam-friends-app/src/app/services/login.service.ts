import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly demoUrl = 'http://localhost:5000/login';
  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };
  constructor(private _http: HttpClient) {}

  Login(auth: any) {
    return this._http.post(this.demoUrl, auth, this.noAuthHeader);
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) return userPayload;
    else return false;
  }
}
