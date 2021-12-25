import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  demoURl = 'http://localhost:5000/friends';
  constructor(private _http: HttpClient) {}

  getFriends() {
    return this._http.get(this.demoURl);
  }
}
