import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAddComponent } from './note-add.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, matFormFieldAnimations } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('NoteAddComponent', () => {
  let component: NoteAddComponent;
  let fixture: ComponentFixture<NoteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [HttpClientModule,FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatChipsModule,
      MatCardModule,
      MatRippleModule,
      LayoutModule,
      MatSidenavModule,
      MatListModule,
      MatDatepickerModule, 
      MatNativeDateModule,
      MatRadioModule,
      MatSnackBarModule],
      declarations: [ NoteAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
