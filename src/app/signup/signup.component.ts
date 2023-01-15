import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import {UserServiceService} from "../Services/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user=new User("","","");


  constructor( private  userService: UserServiceService,private router:Router) { }
  register(){
    this.userService.register(this.user).then(res=> console.log(res))
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}
