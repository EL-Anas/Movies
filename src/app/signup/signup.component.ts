import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user=new User("","","");
  

  constructor() { }
  register(){
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
