import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { family } from '../models/family';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class FamilyService {
  header: any;
  demoURl = 'http://localhost:5000/family';
  constructor(private _http: HttpClient, private loginService: LoginService) {}

  getFamily(): Observable<family[]> {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);
    //  this.header = JSON.parse(localStorage.getItem('token')!);
    return this._http.get<family[]>(this.demoURl, { headers: this.header });
  }
}
