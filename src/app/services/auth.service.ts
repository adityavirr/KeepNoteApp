import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn: boolean = false;

        login(email: string, password: string) {
          if(email === "niit@stackroute.in" || "abc@email.com" && password ==="StackRoute@2023" || "password123"){
            this.isUserLoggedIn = true;
          }
        }

        logout() {
            this.isUserLoggedIn = false;
        }

        isLoggedIn() {
          return this.isUserLoggedIn;
        }
}
