import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View12Component } from './view12.component';

describe('View12Component', () => {
  let component: View12Component;
  let fixture: ComponentFixture<View12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
