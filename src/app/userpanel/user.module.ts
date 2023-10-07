import { NgModule } from "@angular/core";
import { UserroutingModule } from "./user-routing.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule ,FormsModule}  from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { CommonModule } from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import { ProductsComponent } from './products/products.component'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Observable} from 'rxjs';

import {NgFor, AsyncPipe} from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatPageComponent } from './chat-page/chat-page.component';

@NgModule({
    declarations:[

    LoginComponent,
      RegisterComponent,
      HomeComponent,
      NavBarComponent,
      ProductsComponent,
      ChatListComponent,
      ChatPageComponent
    
  ],
    imports:[
UserroutingModule,
ReactiveFormsModule,
FormsModule,
CommonModule,
NgFor,
AsyncPipe,

// material modules
MatButtonModule,
MatAutocompleteModule,
MatInputModule,
MatFormFieldModule

    ]
})

export class UserModule{}