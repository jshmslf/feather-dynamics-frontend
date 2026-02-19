import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurText } from './blur-text';

describe('BlurText', () => {
  let component: BlurText;
  let fixture: ComponentFixture<BlurText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlurText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlurText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
