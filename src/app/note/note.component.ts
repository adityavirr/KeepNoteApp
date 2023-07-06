import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../models/note';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../services/note.service';
import { RouterService } from '../services/router.service';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input()
  note?: Note;
  
  @Output()
  noteDeleted: EventEmitter<any> = new EventEmitter<any>();
  cardElement: any;

  constructor(private _snackBar: MatSnackBar,private noteService: NoteService, private routerService: RouterService) { }

  ngOnInit(): void {
  }
      
  delete() {
    this.noteService.deleteNote(this.note?.id).subscribe({
    next:data=>{
      this.noteDeleted.emit();
      this._snackBar.open('Note deleted successfully', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      this.routerService.navigateToNotesView(); 
  },
  error:err=>{
    alert("Failure while connecting to server, try again!!");
  }})
}

}
