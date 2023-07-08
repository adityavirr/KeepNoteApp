import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn: boolean = false;

        login(email: string, password: string) {
          
            this.isUserLoggedIn = (email === "niit@stackroute.in" && password ==="StackRoute@2023") 
                                || (email === "" && password ==="");
        }

        logout() {
            this.isUserLoggedIn = false;
        }

        isLoggedIn() {
          return this.isUserLoggedIn;
        }
}
