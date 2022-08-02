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
  // registerForm = new FormGroup({
  //   name:new FormControl('',[
  //     Validators.required,
  //     Validators.minLength(3),
  //     Validators.maxLength(100)
  //   ]),
    

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



  // get name(){return this.registerForm.get("name")}
  // get email(){return this.registerForm.get("email")}
  // get password(){return this.registerForm.get("password")}
  
  // registerData(){
  //  console.log(this.registerForm.value)
  // }


  /**
   * Start using template Forms with Eng Marwa
   */

   userData:User = {name:'' , email:'',password:''}
  constructor(private _user:UserService, private _route:Router) {}
  ngOnInit(): void {
  }
  
  onRegister(data:NgForm){
    if(data.valid){
      this._user.register(data.value)
      .subscribe(
        (res)=> { console.log(res)},
        (err)=>{console.log(err.error.data)},
        ()=> {
          console.log("done")
          this._route.navigate(["/"])
          // this._route.navigateByUrl("/")
        }
        
        )
    }
  }

}
