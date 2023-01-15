import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../Services/user-service.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }
  get isLogged(): boolean {
    return this.userService.logged;
  }
  logout() {
    this.userService.logout();
  }


}
