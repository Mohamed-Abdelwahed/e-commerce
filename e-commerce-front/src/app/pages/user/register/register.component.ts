import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSubmitted : boolean = false
  registerUser = new FormGroup({
    name:new FormControl("", [
      Validators.required, 
      Validators.maxLength(20), 
      Validators.minLength(5)
    ]),
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
  get name() { return this.registerUser.get("name")}
  get email() { return this.registerUser.get("email")}
  get password() { return this.registerUser.get("password")}
  register(){
    this.isSubmitted=true
    if(this.registerUser.valid){
      this._user.register(this.registerUser.value)
      .subscribe(
        (res)=> {
          this._user.otp=res.data.otp
          console.log(res)
        },
        (err)=> {
          this.msg=err.error.data
          this.emailUniqueError="email used before"
        },
        ()=> {
          this._router.navigateByUrl("/user/activate")
        }
      )
    }
  }

}
