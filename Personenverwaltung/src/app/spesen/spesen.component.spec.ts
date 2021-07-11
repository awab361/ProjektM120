import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpesenComponent } from './spesen.component';

describe('SpesenComponent', () => {
  let component: SpesenComponent;
  let fixture: ComponentFixture<SpesenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpesenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpesenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
