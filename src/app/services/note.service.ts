import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { Notes } from '../models/notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  note_url: string = "http://localhost:3000/notes"

  getNotes(){
    return this.http.get<Note[]>(this.note_url);
  }

  getNote(noteId: number): Observable<any> {
    return this.http.get<Note>(`${this.note_url}/${noteId}`);
  }
 
  addNote(note: Note){
    return this.http.post<Note>(this.note_url,note);
  }

  modifyNote(id?: number, note?: Note) {
    return this.http.put<Note>(`${this.note_url}/${id}`,note);
  }

  deleteNote(id?: number) {    
    return this.http.delete<Note>(`${this.note_url}/${id}`);
  }
  
}
