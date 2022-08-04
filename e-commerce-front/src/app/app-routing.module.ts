import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivateComponent } from './pages/user/activate/activate.component';
import { AllUsersComponent } from './pages/user/all-users/all-users.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { SingleUserComponent } from './pages/user/single-user/single-user.component';
import { AddProductComponent } from './product/add-product/add-product.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"user" ,children:[
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"activate",component:ActivateComponent},
    {path:"allUser",children:[
      {path:"",component:AllUsersComponent},
      {path:":id",component:SingleUserComponent}
    ]},
    {path:"editeProfile" , component:ProfileComponent}
  ]},
  {path:"product", children:[
    {path:"add" ,component:AddProductComponent }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
