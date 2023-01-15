import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  server="http://localhost:8080/api/user/";

  public get logged():boolean {
    const _state =localStorage.getItem('logged') ;
    return _state == "true";
  }
  public set logged(_state:boolean) {
    localStorage.setItem('logged', _state?"true":"false");
  }

  constructor(private http:HttpClient, private router:Router) { }

  register(user:User){
    return this.http.post(this.server+"register",user).toPromise()
    .then((response:any)=>response)
    .catch((error)=>console.log(error))
  }

  login(username:string, password:string) {
    return this.http.post(this.server+"login",{username:username, password:password}).toPromise()
    .then((response:any)=>{
      this.logged = true;
      this.router.navigate(['/'])
      return response
    })
    .catch((error)=>{
      this.logged=false;
      console.log(error)
      return error
    })
  }

  logout() {
    this.http.get(this.server+"logout").toPromise().then(()=>{
      this.logged=false;
    })
  }

  addFav(favMovieId:string){
    const data="{favMovieId:"+favMovieId+"}"
    return this.http.post(this.server+"addfav",data).toPromise()
    .then((response:any)=>response)
    .catch((error)=>console.log(error))
  }

}
