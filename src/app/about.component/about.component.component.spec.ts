import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About.ComponentComponent } from './about.component.component';

describe('About.ComponentComponent', () => {
  let component: About.ComponentComponent;
  let fixture: ComponentFixture<About.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ About.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(About.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
