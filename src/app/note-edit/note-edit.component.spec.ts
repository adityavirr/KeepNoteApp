import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEditComponent } from './note-edit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { of } from 'rxjs';

describe('NoteEditComponent', () => {
  let component: NoteEditComponent;
  let fixture: ComponentFixture<NoteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteEditComponent ],
      imports: [FormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
      HttpClientModule,
    RouterModule],
providers: [
  {
    provide: ActivatedRoute, useValue: {
      paramMap: of({ get: (id: any) => 301 })
    }
  },
  Router,
]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
