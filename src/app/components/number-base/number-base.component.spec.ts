import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberBaseComponent } from './number-base.component';

describe('NumberBaseComponent', () => {
  let component: NumberBaseComponent;
  let fixture: ComponentFixture<NumberBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
