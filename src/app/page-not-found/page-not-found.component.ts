import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private routerService: RouterService) { }

  ngOnInit(): void {
  }

  toNotesView(){
    this.routerService.navigateToNotesView()    
  }

}
