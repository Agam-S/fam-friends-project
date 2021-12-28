import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFamily, family } from '../models/family';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class FamilyService {
  header: any;
  demoURl = 'http://localhost:5000/family';
  demoURl1 = 'http://localhost:5000/family/add';
  demoURl2 = 'http://localhost:5000/family/edit';
  constructor(private _http: HttpClient, private loginService: LoginService) {}

  getFamily(): Observable<family[]> {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);
    //  this.header = JSON.parse(localStorage.getItem('token')!);
    return this._http.get<family[]>(this.demoURl, { headers: this.header });
  }
  postFamily(fam: IFamily): Observable<IFamily> {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);
    //  this.header = JSON.parse(localStorage.getItem('token')!);
    return this._http.post<IFamily>(this.demoURl1, fam, {
      headers: this.header,
    });
  }
  deleteFam(_id: string) {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);

    return this._http.delete<family>(this.demoURl + '/' + _id, {
      headers: this.header,
    });
  }
  getByID(_id: string): Observable<family> {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);
    return this._http.get<family>(this.demoURl2 + '/' + _id, {
      headers: this.header,
    });
  }
  putbyID(editFam: IFamily, _id: string): Observable<IFamily> {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);

    return this._http.put<IFamily>(this.demoURl2 + '/' + _id, editFam, {
      headers: this.header,
    });
  }
}
