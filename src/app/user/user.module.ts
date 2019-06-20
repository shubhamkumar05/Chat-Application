import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

//Froms module 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import  {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forChild([
      {path:'signup',component:SignupComponent},
    ])

    
  ]
})
export class UserModule { }
