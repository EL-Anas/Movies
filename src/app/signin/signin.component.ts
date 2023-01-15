import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../Services/user-service.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  username="";
  password="";

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }
  login() {
    this.userService.login(this.username, this.password)

  }

}
