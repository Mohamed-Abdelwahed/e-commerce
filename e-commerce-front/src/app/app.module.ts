import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivateComponent } from './pages/user/activate/activate.component';
import { ChangePasswordComponent } from './pages/user/change-password/change-password.component';
import { AllUsersComponent } from './pages/user/all-users/all-users.component';
import { SingleUserComponent } from './pages/user/single-user/single-user.component';
import { ChangeImageComponent } from './pages/user/change-image/change-image.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { CardComponent } from './shared/user/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ActivateComponent,
    ChangePasswordComponent,
    AllUsersComponent,
    SingleUserComponent,
    ChangeImageComponent,
    ProfileComponent,
    AddProductComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
