import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import {UserServiceService} from "../Services/user-service.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user=new User("","","");


  constructor( private  userService: UserServiceService) { }
  register(){
    console.log(this.user);
    this.userService.register(this.user).then(res=> console.log(res))
  }

  ngOnInit(): void {
  }

}
