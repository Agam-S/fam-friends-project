import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { friends } from '../models/friends';
import { LoginService } from './login.service';
import { IFriend } from '../models/friends';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  header: any;
  demoURl = 'http://localhost:5000/friends';
  demoURl1 = 'http://localhost:5000/friends/add';
  constructor(private _http: HttpClient, private loginService: LoginService) {}

  getFriends(): Observable<friends[]> {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);
    //  this.header = JSON.parse(localStorage.getItem('token')!);
    return this._http.get<friends[]>(this.demoURl, { headers: this.header });
  }
  postFriends(friend: IFriend): Observable<IFriend> {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);
    //  this.header = JSON.parse(localStorage.getItem('token')!);
    return this._http.post<IFriend>(this.demoURl1, friend, {
      headers: this.header,
    });
  }
}
