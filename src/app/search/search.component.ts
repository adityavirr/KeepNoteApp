import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  
  searchText: string = '';
  
  @Output()
  noteSearched: EventEmitter<any> = new EventEmitter<any>;

  searchNote(){
    this.noteSearched.emit(this.searchText)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
