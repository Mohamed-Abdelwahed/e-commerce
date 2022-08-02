import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiLink:string = "http://localhost:4242/api/user/"



  constructor(private _http:HttpClient) { }

  register(data:User):Observable<any>{
    return this._http.post(`${this.apiLink}register`, data)
  }

  
  login(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}login`, data)
  }
}
