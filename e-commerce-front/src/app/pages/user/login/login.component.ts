import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isSubmitted : boolean = false
  loginForm = new FormGroup({
    email:new FormControl("", [
      Validators.required, 
      Validators.email
    ]),
    password:new FormControl("", [
      Validators.required, 
      Validators.maxLength(20), 
      Validators.minLength(5)
    ])
  })
  msg=""
  emailUniqueError = ""
  constructor(private _user : UserService, private _router:Router) { }
ngOnInit(): void {}
  get email() { return this.loginForm.get("email")}
  get password() { return this.loginForm.get("password")}
  login(){
    this.isSubmitted=true
    if(this.loginForm.valid){
      this._user.login(this.loginForm.value)
      .subscribe(
        (res)=> {
          console.log(res)
          localStorage.setItem("userToken", `Bearer ${res.data.token}`)
          this._user.userData = res.data.user
        },
        (err)=> {
          this.msg="Invalid login data"
        },
        ()=> {
          this._user.isLoggedIn=true
         this._router.navigateByUrl("/user/all")
        }
      )
    }
  }


  // start test login ts
  // loginForm = new FormGroup({
  // email:new FormControl('',[
  //   Validators.required,
  //   Validators.minLength(5)
  // ]),

  // password:new FormControl('',[
  //   Validators.required,
  //   Validators.pattern(''),
  //   Validators.minLength(8)
  // ])

  // })


  // constructor(private _user:UserService, private _route:Router) { }

  // ngOnInit(): void {
  // }


  // onLogin(){
   
  //   if(this.loginForm.valid){
  //     this._user.login(this.loginForm.value)
  //     .subscribe(res=>console.log(res)        
  //     , 
  //      (err)=>{console.log(err.error.data)},
  //      ()=>{  this.loginForm.reset()
  //       this._route.navigate(["/"])
  //     }
        
        
  //       )
  //   }
  // }


}
