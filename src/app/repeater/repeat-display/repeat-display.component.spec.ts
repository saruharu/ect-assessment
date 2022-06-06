import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatDisplayComponent } from './repeat-display.component';

describe('RepeatDisplayComponent', () => {
  let component: RepeatDisplayComponent;
  let fixture: ComponentFixture<RepeatDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
