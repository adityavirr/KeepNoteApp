import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note';
import { RouterService } from '../services/router.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  

  constructor(private noteService: NoteService, private routerService: RouterService, private activatedRoute: ActivatedRoute) { }
  note: Note = {title: "", content: ""};
  submitStatus: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      let id = data.get('id') ?? 0;
      this.noteService.getNote(+id).subscribe(data => {
          this.note = data;
          this.submitStatus = false;
      });
  });
  }

  editNote() {
    this.noteService.modifyNote(this.note?.id, this.note).subscribe(data => {
    this.note = data;
    this.submitStatus = true;
    this.routerService.navigateToNotesView();
    })
}

canDeactivate() {
  if (!this.submitStatus)
      this.submitStatus = confirm("You have not saved your changes. Any details entered will be lost. Are you sure you want to leave?");
  return this.submitStatus;
}
}
