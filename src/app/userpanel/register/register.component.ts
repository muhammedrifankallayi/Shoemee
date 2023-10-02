import { Component  } from '@angular/core';
import     { FormGroup , FormControl ,Validators } from "@angular/forms"
import { UserserviceService } from 'src/app/services/userservice.service';
import { user } from 'src/app/types/user.types';
import Swal from "sweetalert2"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent    {

constructor(private service:UserserviceService){}


UserForm =  new FormGroup({
  name:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required]),
  confirm_password: new FormControl("",[Validators.required])
})



submit(){
if(this.UserForm.invalid){
Swal.fire({
  title:"Entered data invalid",
  text:"please check the data you enterd",
  confirmButtonColor:"#DD6B55",
  icon:"error"
})
return
}else{
  const data = this.UserForm.value
  const datas:user  = {
    name: data.name || '', 
    email: data.email || '', 
    password: data.password || '', 
    confirm_password: data.confirm_password || '', 
  };

this.service.userRegister(datas)


}




}



}
