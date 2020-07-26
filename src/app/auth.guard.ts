import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public as: AuthService, private auth: AngularFireAuth, private router: Router){}
  
  canActivate(): boolean{
    
    
    if(this.auth.auth.currentUser == null){
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
  
}
