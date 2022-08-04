import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _user:UserService) { }

  ngOnInit(): void {
    this._user.me().subscribe(
      res=>{
        this._user.isLoggedIn=true
        this._user.userData = res.data
      },
      err=>{
        this._user.isLoggedIn=false
      }
    )
  }

  logout(){
    this._user.logout().subscribe(
      res=> {
        this._user.isLoggedIn=false
        this._user.userData=null
        localStorage.removeItem("userToken")
      }
    )
  }

}
