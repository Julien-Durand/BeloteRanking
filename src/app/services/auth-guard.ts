import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  user: Observable<firebase.User>;

  constructor(public authService: AuthService,
              public router: Router) {
    this.user = this.authService.user;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.user) {
      this.router.navigate(['BeloteRanking/sign-in']);
    }
    return true;
  }
}
