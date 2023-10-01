import { NgModule } from "@angular/core";
import { UserroutingModule } from "./user-routing.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule ,FormsModule}  from "@angular/forms"



@NgModule({
    declarations:[

    LoginComponent,
      RegisterComponent
    
  ],
    imports:[
UserroutingModule,
ReactiveFormsModule,
FormsModule
    ]
})

export class UserModule{}