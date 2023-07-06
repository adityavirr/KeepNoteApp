import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {
  note: Note = {};
  minDate: Date = new Date();

  isFormHidden: boolean = true;
  
  @Output()
  noteAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor(private noteService: NoteService,private _snackBar: MatSnackBar) { }

  toggleForm() {
    this.isFormHidden = !this.isFormHidden;
  }

  ngOnInit(): void {
  }

  
  addNote() {
    this.noteService.addNote(this.note).subscribe({
    next:data=>{
      this.noteAdded.emit(data);
      this._snackBar.open('Note added successfully', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      
  },
  error:err=>{
    alert("Failure while connecting to server, try again!!");
  }})
  this.note = {};
}

resetform(noteForm: any){
  noteForm.resetForm();
}
}

