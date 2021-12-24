import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashService {
  readonly demoUrl = 'http://localhost:5000/dash';
  constructor(private _http: HttpClient) {}

  GetDash() {
    return this._http.get(this.demoUrl);
  }
}
