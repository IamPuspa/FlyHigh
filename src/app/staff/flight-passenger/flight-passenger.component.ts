import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { PassengerListService } from '../passenger-list.service'

@Component({
  selector: 'app-flight-passenger',
  templateUrl: './flight-passenger.component.html',
  styleUrls: ['./flight-passenger.component.scss'],
})
export class FlightPassengerComponent implements OnInit {
  selectedPassenger
  selectedFlight
  passenger
  PassengerList

  constructor(
    private router: ActivatedRoute,
    private passengerService: PassengerListService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.selectedPassenger = {
      Pid: this.router.snapshot.params['pId'],
    }

    this.selectedFlight = {
      Fid: this.router.snapshot.params['id'],
    }

    this.displaySelectedPassenger(
      this.selectedPassenger.Pid,
      this.selectedFlight.Fid,
    )
  }

  displaySelectedPassenger(Pid, Fid) {
    let passengerDetails
    if (Fid == 1) {
      this.passengerService.getLondonPassengers().subscribe((response) => {
        this.PassengerList = response

        this.passenger = this.PassengerList[Pid - 1]
      })
    }
    if (Fid == 2) {
      this.passengerService.getNewYorkPassengers().subscribe((response) => {
        this.PassengerList = response

        this.passenger = this.PassengerList[Pid - 1]
      })
    }
    if (Fid == 3) {
      this.passengerService.getSeoulPassengers().subscribe((response) => {
        this.PassengerList = response

        this.passenger = this.PassengerList[Pid - 1]
      })
    }
    if (Fid == 4) {
      this.passengerService.getHongKongPassengers().subscribe((response) => {
        this.PassengerList = response

        this.passenger = this.PassengerList[Pid - 1]
      })
    }
  }

  changeSeatNumber(value) {
    this.passenger.seatNo = value
    if (this.selectedFlight.Fid == 1) {
      this.passengerService
        .updatePassengerL(this.passenger)
        .subscribe((res) => {
          this.goingback()
        })
    } else if (this.selectedFlight.Fid == 2) {
      this.passengerService
        .updatePassengerNY(this.passenger)
        .subscribe((res) => {
          this.goingback()
        })
    } else if (this.selectedFlight.Fid == 3) {
      this.passengerService
        .updatePassengerS(this.passenger)
        .subscribe((res) => {
          this.goingback()
        })
    } else {
      this.passengerService
        .updatePassengerHK(this.passenger)
        .subscribe((res) => {
          this.goingback()
        })
    }
  }

  goingback() {
    this.route.navigate(['../../'], {
      relativeTo: this.router,
    })
  }
}
