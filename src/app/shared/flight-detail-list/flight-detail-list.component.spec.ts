import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailListComponent } from './flight-detail-list.component';

describe('FlightDetailListComponent', () => {
  let component: FlightDetailListComponent;
  let fixture: ComponentFixture<FlightDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
