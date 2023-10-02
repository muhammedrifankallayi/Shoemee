import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {user} from "../types/user.types"
import { Observable } from 'rxjs';

const server = "http://localhost:4500"


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }


userRegister(data:user):Observable<any>{
  
return this.http.post(`${server}/userRegister`,{data})
}



}
