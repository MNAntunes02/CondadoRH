import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../pages/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthBlockGuard {
  private auth = getAuth()

  constructor(
    private authservice: AuthService,
    private router : Router  
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.auth.currentUser?.uid !== null){
      return this.router.createUrlTree(['/login']);
    }else{
      return true;
    }

  }
  
}
