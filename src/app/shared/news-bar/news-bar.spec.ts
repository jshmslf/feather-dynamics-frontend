import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBar } from './news-bar';

describe('NewsBar', () => {
  let component: NewsBar;
  let fixture: ComponentFixture<NewsBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
