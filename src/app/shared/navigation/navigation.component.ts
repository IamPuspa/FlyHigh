import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from 'src/app/auth/login.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  currentUser: any
  employeeName

  constructor(private loginService: LoginService, private route: Router) {}

  ngOnInit(): void {
    this.loginService.currentUserObservable.subscribe((res) => {
      this.currentUser = res
    })
  }
  logout() {
    this.loginService.onLogout()
  }

  dashboard() {
    this.route.navigate(['staff'])
  }
}
