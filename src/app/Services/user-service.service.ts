import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  server="localhost:8080/"
  register(user:User){
    return this.http.post(this.server+"register",user).toPromise()
    .then((response:any)=>response)
    .catch((error)=>console.log(error))
  }
  constructor(private http:HttpClient) { }


}
