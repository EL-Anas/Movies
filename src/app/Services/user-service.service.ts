import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  server="http://localhost:8080/api/user/";
  logged = false;

  constructor(private http:HttpClient) { }

  register(user:User){
    return this.http.post(this.server+"register",user).toPromise()
    .then((response:any)=>response)
    .catch((error)=>console.log(error))
  }

  login(username:string, password:string) {
    return this.http.post(this.server+"login",{username:username, password:password}).toPromise()
    .then((response:any)=>{
      this.logged = true;
      return response
    })
    .catch((error)=>{
      this.logged=false;
      console.log(error)
    })
  }

  logout() {
    this.http.get(this.server+"logout").toPromise().then(()=>{
      this.logged=false;
    })
  }

}
