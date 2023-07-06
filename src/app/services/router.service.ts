import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private routerService: Router) { }

  navigateToNotesView(){
    this.routerService.navigate(["notes"]);
  }

  navigateToLoginView(){
    this.routerService.navigate(['login']);
  }
}
