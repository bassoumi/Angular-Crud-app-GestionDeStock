import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn:boolean=false
  constructor() { }
  login(username: string, password: string): boolean {
    if (username === 'utilisateur' && password === 'motdepasse') {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false; 
      return false;
    }
  }
  
}