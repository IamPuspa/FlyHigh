import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  constructor(private route: Router, private routerA: ActivatedRoute) {}

  ngOnInit(): void {}

  getSelectedFLightInfo(flight) {
    this.route.navigate(['flight', flight.id], {
      relativeTo: this.routerA,
    })
  }
}
