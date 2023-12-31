import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [

{path:"",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"home",component:HomeComponent},
{path:"products",component:ProductsComponent}
];

@NgModule({
  imports: [
    
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserroutingModule { }