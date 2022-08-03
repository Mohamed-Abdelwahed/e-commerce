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

  register(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}register`, data)
  }

  
  login(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}login`, data)
  }

  activateAcc(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}activate account`, data)
  }

  me(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}me`, data)
  }

  sendOTP(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}sendOTP`, data)
  }

  changePassword(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}changePassword`, data)
  }

  logout():Observable<any>{
    return this._http.post(`${this.apiLink}logout`, null)
  }

  logoutAll():Observable<any>{
    return this._http.post(`${this.apiLink}logoutAll`, null)
  }

  allUsers():Observable<any>{
    return this._http.get(`${this.apiLink}allUsers`)
  }

  singleUser():Observable<any>{
    return this._http.get(`${this.apiLink}singleUser`)
  }

  deactivate(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}deactivate`, data)
  }

  editPassword(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}editPassword`, data)
  }

  delAccount(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}delete acount`, data)
  }

  edit(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}edit`, data)
  }

  ChangeImage(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}change Image`, data)
  }

}
