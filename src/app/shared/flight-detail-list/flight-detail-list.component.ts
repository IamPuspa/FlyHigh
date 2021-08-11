import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FlightDetailsServiceService } from '../services/flight-details-service.service'

@Component({
  selector: 'app-flight-detail-list',
  templateUrl: './flight-detail-list.component.html',
  styleUrls: ['./flight-detail-list.component.scss'],
})
export class FlightDetailListComponent implements OnInit {
  flightsAvailable
  day = new Date().toDateString()
  @Output() flightSelected = new EventEmitter<any>();

  constructor(private flightDetailsService: FlightDetailsServiceService) {}

  ngOnInit(): void {
    this.flightDetailsService.getFlights().subscribe((response) => {
      this.flightsAvailable = response
    })
  }

  showInfo(flight) {
    this.flightSelected.emit(flight);
  }
}
