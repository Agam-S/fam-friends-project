import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly demoUrl = 'http://localhost:5000/login';
  // noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };
  constructor(private _http: HttpClient) {}

  Login(auth: any) {
    return this._http.post(this.demoUrl, auth);
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
  // function 'isLoggedIn' checks if the user is logged in by checking if the token is present in the local storage
  isLoggedIn() {
    const token = this.getToken();
    if (token) {
      return true;
    }
    return false;
  }
  // function 'getUserPayload' returns the token
  getUserPayload() {
    const token = this.getToken();
    return token;
  }
}
