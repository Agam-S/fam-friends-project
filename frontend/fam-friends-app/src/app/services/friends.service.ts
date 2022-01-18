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
  demoURl = 'https://whispering-sands-56141.herokuapp.com/friends';
  demoURl1 = 'https://whispering-sands-56141.herokuapp.com/friends/add';
  demoURl2 = 'https://whispering-sands-56141.herokuapp.com/friends/edit';
  demoURl3 = 'https://whispering-sands-56141.herokuapp.com/friends/view';
  demoURl4 = 'http://localhost:8080/friends/view';

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
  deleteFriend(_id: string) {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);

    return this._http.delete<friends>(this.demoURl + '/' + _id, {
      headers: this.header,
    });
  }
  getByID(_id: string): Observable<friends> {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);
    return this._http.get<friends>(this.demoURl2 + '/' + _id, {
      headers: this.header,
    });
  }
  readByID(_id: string): Observable<friends> {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);
    return this._http.get<friends>(this.demoURl4 + '/' + _id, {
      headers: this.header,
    });
  }
  putbyID(editFri: IFriend, _id: string): Observable<IFriend> {
    this.header = new HttpHeaders().set('token', this.loginService.getToken()!);

    return this._http.put<IFriend>(this.demoURl2 + '/' + _id, editFri, {
      headers: this.header,
    });
  }
}
