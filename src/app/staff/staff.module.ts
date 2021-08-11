import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StaffRoutingModule } from './staff-routing.module'
import { StaffComponent } from './staff.component'
import { SharedModule } from '../shared/shared.module'
import { FlightDetailComponent } from './flight-detail/flight-detail.component'
import { MatTableModule } from '@angular/material/table';
import { FlightPassengerComponent } from './flight-passenger/flight-passenger.component'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryApiService } from '../shared/in-memory-api/in-memory-api.service';
import { FilterPassengerPipe } from './filter-passenger.pipe'
import { FormsModule } from '@angular/forms';
import { SeatMapComponent } from './seat-map/seat-map.component'

@NgModule({
  declarations: [StaffComponent, FlightDetailComponent, FlightPassengerComponent, FilterPassengerPipe, SeatMapComponent],
  imports: [CommonModule, FormsModule, StaffRoutingModule, SharedModule, MatTableModule, InMemoryWebApiModule.forRoot(InMemoryApiService),],
})
export class StaffModule {}
