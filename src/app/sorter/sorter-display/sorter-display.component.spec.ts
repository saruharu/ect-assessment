import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorterDisplayComponent } from './sorter-display.component';

describe('SorterDisplayComponent', () => {
  let component: SorterDisplayComponent;
  let fixture: ComponentFixture<SorterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorterDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
