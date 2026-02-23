import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timeline2 } from './timeline-2';

describe('Timeline2', () => {
  let component: Timeline2;
  let fixture: ComponentFixture<Timeline2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timeline2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Timeline2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
