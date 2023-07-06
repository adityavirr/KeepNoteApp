import { Component, OnInit } from '@angular/core';
import { Notes } from '../models/notes';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note';


@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  // notes = Notes;
  notes: Note [] = [];
  constructor(private noteService: NoteService) { }

  onNoteAdded($event:any){
    this.notes.push($event);
  }

  onNoteDeleted(){
    this.noteService.getNotes().subscribe({
      next: data => {
        this.notes = data;
      }
    });
  }
  onNoteSearched(searchText:string){
   this.noteService.getNotes().subscribe({
      next: data => {
        if(searchText === '' || !searchText)
        this.notes = data;

        else
        this.notes = data.filter(note => note.title?.toLowerCase().includes(searchText.toLowerCase()));
      },
      error: error => {
        alert('Failed to Fetch Notes Due to Server Error !!');
      }
    });}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe({
      next: data => {
        this.notes = data;
      },
      error: error => {
        alert('Failed to Fetch Notes Due to Server Error !!');
      }
    });
  }

}
