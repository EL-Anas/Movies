import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserServiceService} from "./Services/user-service.service";

@Injectable({
  providedIn: 'root'
})
export class ConnectedGuard implements CanActivate {

  constructor(private userService:UserServiceService, private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedIn = this.userService.logged;
    if (!isLoggedIn){
      return true
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }

}
