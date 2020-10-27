import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View22Component } from './view22.component';

describe('View22Component', () => {
  let component: View22Component;
  let fixture: ComponentFixture<View22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
