import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FlightDetailComponent } from './flight-detail/flight-detail.component'
import { FlightPassengerComponent } from './flight-passenger/flight-passenger.component'
import { SeatMapComponent } from './seat-map/seat-map.component'
import { StaffComponent } from './staff.component'

const routes: Routes = [
  { path: '', component: StaffComponent },
  {
    
    path: 'flight/:id',
    component: FlightDetailComponent
  },
  {
    
    path: 'flight/:id/seatMap/:id',
    component: SeatMapComponent
  },
  {
   
    path: 'flight/:id/passenger/:pId',
    component: FlightPassengerComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
