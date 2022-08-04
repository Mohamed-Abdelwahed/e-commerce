import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public _user : UserService, private _http:HttpClient) { }
  myNewImg:any
  ngOnInit(): void {
  }
  fileChng(event:any){
    this.myNewImg = event.target.files[0]
    console.log(this.myNewImg)
  }
  upImg(){
    const myData = new FormData()
    myData.append("img", this.myNewImg, this.myNewImg.name)
    this._user.changeImage(myData)
    .subscribe(res=>{
      console.log(res)
      this._user.userData.pImage= res.data.pImage
    })
  }


}
