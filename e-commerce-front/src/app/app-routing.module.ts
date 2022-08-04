import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivateComponent } from './pages/user/activate/activate.component';
import { AllUsersComponent } from './pages/user/all-users/all-users.component';
import { ChangeImageComponent } from './pages/user/change-image/change-image.component';
import { ChangePasswordComponent } from './pages/user/change-password/change-password.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { SingleUserComponent } from './pages/user/single-user/single-user.component';
import { AddProductComponent } from './product/add-product/add-product.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"user", children:[
    {path:"register", component:RegisterComponent},
    {path:"activate", component:ActivateComponent},
    {path:"all", children:[
      {path:"", component:AllUsersComponent},
      {path:":id", component:SingleUserComponent}  
    ]},
    {path:"editProfile", component:ProfileComponent},
    {path:"changeImage", component:ChangeImageComponent},    
    {path:"changePass", component:ChangePasswordComponent},    
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
