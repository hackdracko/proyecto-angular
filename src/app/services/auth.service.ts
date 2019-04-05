import { SessionService } from './session.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  isAuthenticated() {
    if (this.session.getUser() != null ) {
      return true;
    }
    return false;
  }

  logout() {
    this.session.clearUser();
    this.router.navigate(['/login']);
  }

}
