import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  constructor() { }

  getUser() {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    return user;
  }

  setUser(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }

  clearUser() {
    sessionStorage.removeItem('currentUser');
  }

}
