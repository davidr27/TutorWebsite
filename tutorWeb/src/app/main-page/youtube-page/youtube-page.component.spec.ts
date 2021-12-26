import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePageComponent } from './youtube-page.component';

describe('YoutubePageComponent', () => {
  let component: YoutubePageComponent;
  let fixture: ComponentFixture<YoutubePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
