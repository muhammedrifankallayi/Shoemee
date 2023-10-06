import { NgModule } from "@angular/core";
import { UserroutingModule } from "./user-routing.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule ,FormsModule}  from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { CommonModule } from "@angular/common";
import {MatButtonModule} from "@angular/material/button"



@NgModule({
    declarations:[

    LoginComponent,
      RegisterComponent,
      HomeComponent,
      NavBarComponent
    
  ],
    imports:[
UserroutingModule,
ReactiveFormsModule,
FormsModule,
CommonModule,

// material modules
MatButtonModule

    ]
})

export class UserModule{}