import { Component, OnInit, Output } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { PassengerListService } from '../passenger-list.service'

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss'],
})
export class FlightDetailComponent implements OnInit {
  Selectedflight
  SelectedPassenger
  flights
  displayFlightId
  passengerList
  objectList
  displayedColumns: string[] = [
    'seatNo',
    'name',
    'status',
    'wheelchair',
    'infant',
    'options',
  ]
  selectedPassengerStatus
  FilteredCheckedInStatus='';
  list:[]=[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private passengerService: PassengerListService,
  ) {}

  ngOnInit() {
    this.Selectedflight = {
      id: this.route.snapshot.params['id'],
    }
    this.getPassengerList(this.Selectedflight.id)

  }

  getPassengerList(id) {
    switch (id) {
      case '1':
        this.passengerService.getLondonPassengers().subscribe((response) => {
          this.passengerList = response
          this.list = this.passengerList;
        })
        break
      case '2':
        this.passengerService.getNewYorkPassengers().subscribe((response) => {
          this.passengerList = response
          this.list = this.passengerList;
        })
        break
      case '3':
        this.passengerService.getSeoulPassengers().subscribe((response) => {
          this.passengerList = response
          this.list = this.passengerList;
        })
        break
        case '4':
        this.passengerService.getHongKongPassengers().subscribe((response) => {
          this.passengerList = response
          this.list = this.passengerList;
        })
        break
      default:
        console.log('No passenger List reterived !')
    }
  }

  selectPassenger(passenger) {

    this.router.navigate(['passenger', passenger.pId], {
      relativeTo: this.route,
    })
  }

  goback() {
    this.router.navigate(['../staff'])
  }

  seatMap(){
    this.router.navigate(['seatMap',this.Selectedflight.id],{
      relativeTo:this.route
    })
  }

}
