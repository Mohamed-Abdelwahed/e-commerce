import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  isSubmitted : boolean = false
  activateForm = new FormGroup({
    otp:new FormControl(this._user.otp, [
      Validators.required
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

  ngOnInit(): void {
  }
  get otp() { return this.activateForm.get("otp")}
  get email() { return this.activateForm.get("email")}
  get password() { return this.activateForm.get("password")}
  register(){
    this.isSubmitted=true
    if(this.activateForm.valid){
      this._user.activateAcc(this.activateForm.value)
      .subscribe(
        (res)=> this.msg= res,
        (err)=> { this.msg=err.error },
        ()=> {
          // this._router.navigateByUrl("/")
          this._user.login(this.activateForm.value)
          .subscribe(
            res=> this.msg=res,
            (err)=> this.msg=err.error,
            ()=> {
              this._router.navigateByUrl("/")
            }
          )
        }
      )
    }
  }

}
