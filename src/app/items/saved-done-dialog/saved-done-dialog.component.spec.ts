import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDoneDialogComponent } from './saved-done-dialog.component';

describe('SavedDoneDialogComponent', () => {
  let component: SavedDoneDialogComponent;
  let fixture: ComponentFixture<SavedDoneDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedDoneDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedDoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
