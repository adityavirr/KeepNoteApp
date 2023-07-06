import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private routerService: RouterService) { }

  ngOnInit(): void {
  }

  login_email: string = "";
  login_password: string = "";

  validateLogin() {
    this.authService.login(this.login_email, this.login_password);
    if(this.authService.isUserLoggedIn) {
        this.routerService.navigateToNotesView();
    }
}
}
