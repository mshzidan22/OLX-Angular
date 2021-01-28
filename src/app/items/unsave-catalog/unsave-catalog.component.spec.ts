import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsaveCatalogComponent } from './unsave-catalog.component';

describe('UnsaveCatalogComponent', () => {
  let component: UnsaveCatalogComponent;
  let fixture: ComponentFixture<UnsaveCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsaveCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsaveCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
