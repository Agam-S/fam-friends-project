import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class DashService {
  readonly demoUrl = 'https://whispering-sands-56141.herokuapp.com/dash';
  header: any;
  constructor(private _http: HttpClient, private loginService: LoginService) {}

  GetDash() {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);
    //  this.header = JSON.parse(localStorage.getItem('token')!);

    return this._http.get(this.demoUrl, { headers: this.header });
  }
}
