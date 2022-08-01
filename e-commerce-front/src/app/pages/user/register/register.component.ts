import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]),
    

  email:new FormControl('',[
    Validators.required,
    Validators.minLength(15)
  ]),

  password:new FormControl('',[
    Validators.required,
    Validators.pattern(''),
    Validators.minLength(8)
  ])

  })



  get name(){return this.registerForm.get("name")}
  get email(){return this.registerForm.get("email")}
  get password(){return this.registerForm.get("password")}
  
  registerData(){
   console.log(this.registerForm.value)
  }

  constructor() {
   }

  // creatForm() {
  //   // this.registerForm = this.fb.group({
      
  //   // })//
  // }


  ngOnInit(): void {
  }

}
