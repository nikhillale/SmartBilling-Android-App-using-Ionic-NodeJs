import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot):boolean {
      let token = localStorage.getItem('token');
      if (token){
        return true;
      } else {
        this.router.navigate(['../login']);
        return false;
      }
    }


}

