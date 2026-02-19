import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLoop } from './logo-loop';

describe('LogoLoop', () => {
  let component: LogoLoop;
  let fixture: ComponentFixture<LogoLoop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoLoop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoLoop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
