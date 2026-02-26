import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDevelopment } from './research-development';

describe('ResearchDevelopment', () => {
  let component: ResearchDevelopment;
  let fixture: ComponentFixture<ResearchDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchDevelopment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
