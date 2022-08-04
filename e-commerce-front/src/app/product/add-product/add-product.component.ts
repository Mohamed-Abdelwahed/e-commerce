import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addproductForm = new FormGroup({
    name:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]),

    quantity:new FormControl(""),//0,[
    // Validators.required,
    // Validators.min(1)
  // ]),

  description:new FormControl('',[ 
    Validators.required
  ]),
  
  image:new FormControl(),

  color:new FormControl('',[
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]),

  size:new FormControl(),

  categories:new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ]),

  price:new FormControl()

})
  

 get name(){return this.addproductForm.get("name")}
 get quantity(){return this.addproductForm.get("quantity")}
 get description(){return this.addproductForm.get("description")}
 get image(){return this.addproductForm.controls["image"]}
 get color(){return this.addproductForm.controls["color"]}
 get size(){return this.addproductForm.controls["size"]}
 get categories(){return this.addproductForm.get("categories")}
 get price(){return this.addproductForm.get("price")}
 


  constructor() { }

  ngOnInit(): void {
  }

  addProductData(){
  }

}
