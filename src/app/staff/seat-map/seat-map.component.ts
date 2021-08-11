import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { PassengerListService } from '../passenger-list.service'

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.scss'],
})
export class SeatMapComponent implements OnInit {
  Selectedflight: { id: any }
  passengerList
  checkedIn = false
  count: number = 6

  constructor(
    private route: ActivatedRoute,
    private passengerService: PassengerListService,
    private router: Router,
  ) {}

  ngOnInit(): void {
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
          if (this.passengerList.length < 6) {
            let remaining = this.count - this.passengerList.length
            for (var i = 0; i < remaining; i++) {
              this.dynamicallyCreateSeats()
            }
          }
        })
        break
      case '2':
        this.passengerService.getNewYorkPassengers().subscribe((response) => {
          this.passengerList = response
          if (this.passengerList.length < 6) {
            let remaining = this.count - this.passengerList.length
            for (var i = 0; i < remaining; i++) {
              this.dynamicallyCreateSeats()
            }
          }
        })
        break
      case '3':
        this.passengerService.getSeoulPassengers().subscribe((response) => {
          this.passengerList = response
          if (this.passengerList.length < 6) {
            let remaining = this.count - this.passengerList.length
            for (var i = 0; i < remaining; i++) {
              this.dynamicallyCreateSeats()
            }
          }
        })
        break
      case '4':
        this.passengerService.getHongKongPassengers().subscribe((response) => {
          this.passengerList = response
          if (this.passengerList.length < 6) {
            let remaining = this.count - this.passengerList.length
            for (var i = 0; i < remaining; i++) {
              this.dynamicallyCreateSeats()
            }
          }
        })
        break
      default:
        break
    }
  }

  getStatus(value) {
    if (value === 'Checked In') {
      return true
    }
    return false
  }

  tooggle(p) {
    this.checkedIn = !this.checkedIn
    if (this.checkedIn) {
      if (this.Selectedflight.id === '1') {
        p.checkedInStatus = 'Checked In'
        console.log(p.checkedInStatus)
        this.passengerService.updatePassengerL(p).subscribe((res) => {
          console.log('updated!')
          alert('User is checked In now !!')
        })
      } else if (this.Selectedflight.id === '2') {
        p.checkedInStatus = 'Checked In'
        console.log(p.checkedInStatus)
        this.passengerService.updatePassengerNY(p).subscribe((res) => {
          console.log('updated!')
          alert('User is checked In now !!')
        })
      } else if (this.Selectedflight.id === '3') {
        p.checkedInStatus = 'Checked In'
        console.log(p.checkedInStatus)
        this.passengerService.updatePassengerS(p).subscribe((res) => {
          console.log('updated!')
          alert('User is checked In now !!')
        })
      } else {
        p.checkedInStatus = 'Checked In'
        console.log(p.checkedInStatus)
        this.passengerService.updatePassengerHK(p).subscribe((res) => {
          console.log('updated!')
          alert('User is checked In now !!')
        })
      }
    } else console.log('checked Out')
  }

  goback() {
    this.router.navigate(['../../'], { relativeTo: this.route })
  }

  dynamicallyCreateSeats() {
    let remainingSeats = document.querySelector('.remaining-seats')
    const newCheckbox = document.createElement('input')
    const p = document.createElement('p')
    newCheckbox.type = 'checkbox'
    newCheckbox.style.width = '100px'
    newCheckbox.style.height = '50px'
    newCheckbox.setAttribute('disabled', 'true')
    p.innerHTML = 'XXX'
    p.style.marginLeft = '40px'
    const currentDiv = document.createElement('div')
    currentDiv.appendChild(newCheckbox)
    currentDiv.appendChild(p)
    remainingSeats.appendChild(currentDiv)
  }
}
