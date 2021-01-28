import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTitleComponent } from './ad-title.component';

describe('AdTitleComponent', () => {
  let component: AdTitleComponent;
  let fixture: ComponentFixture<AdTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
