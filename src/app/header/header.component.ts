import { Component, OnInit, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  @Input()
  loggedIn: boolean = false;

  headerTitle: string = "Keep Note";
  constructor(private authService: AuthService, private routerService: RouterService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.loggedIn = this.authService.isLoggedIn();
    this.routerService.navigateToLoginView();
  }
}
