import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiLink:string = "http://localhost:4242/api/product/"

  constructor(private _http:HttpClient) {}

  add(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}add`, data)
  }
   myProducts(data:any):Observable<any>{
    return this._http.get(`${this.apiLink}myProducts`, data)
  }
  getSingle(data:any):Observable<any>{
    return this._http.get(`${this.apiLink}getSingle/:id`, data)
  }
  delProduct(data:any):Observable<any>{
    return this._http.delete(`${this.apiLink}delProduct`, data)
  }
  editProduct(data:any):Observable<any>{
    return this._http.post(`${this.apiLink}editProduct`, data)
  }
}
