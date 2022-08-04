import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string = "http://localhost:4242/api/user/"
  public otp = ""
  public isLoggedIn : boolean = false
  public userData:any = null
  constructor(private _http:HttpClient) { }
  register(data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}register`, data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}login`, data)
  }
  activateAcc(data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}activateAcc`, data)
  }
  me():Observable<any>{
    return this._http.get(`${this.baseUrl}me`)
  }
  sendOtp(data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}sendOtp`, data)
  }
  changePassword(data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}changePassword`, data)
  }
  logout():Observable<any>{
    return this._http.post(`${this.baseUrl}logout`, null)
  }
  logoutAll():Observable<any>{
    return this._http.post(`${this.baseUrl}logoutAll`, null)
  }
  all():Observable<any>{
    return this._http.get(`${this.baseUrl}all`)
  }
  single(id:string):Observable<any>{
    return this._http.get(`${this.baseUrl}all/${id}`)
  }
  editPassword(data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}editPassword`, data)
  }
  deactivate(data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}deactivate`, data)
  }
  delAccount(data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}delAccount`, data)
  }
  edit(data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}edit`, data)
  }
  changeImage(data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}changeImage`, data)
  }
}
