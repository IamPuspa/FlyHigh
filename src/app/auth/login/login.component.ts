import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  employeeId: string
  password: string
  employeeList
  successLogin: boolean
  hide: boolean
  checkLogin: boolean

  @Output() login = new EventEmitter<string>()

  constructor(private route: Router, private loginService:LoginService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      employeeId: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
    this.hide = true
  }

  onSubmit() {
    this.employeeId = this.loginForm.value.employeeId
    this.password = this.loginForm.value.password

    this.loginService.validateLogin().subscribe(
      (response) => {
        this.employeeList = response

        // FOR AIRLINE ADMIN CHECK CREDENTIALS
        if (
          this.employeeId === this.employeeList[0].employeeId &&
          this.password === this.employeeList[0].password
        ) {
          this.successLogin = true
          this.route.navigate(['/admin'])
          sessionStorage.setItem('user', JSON.stringify(this.employeeList[0]))
          this.loginService.onSuccessLogin(sessionStorage.getItem('user'))
        } else {
          // FOR AIRLINE STAFF CHECK CREDENTIALS
         
            if (
              this.employeeId === this.employeeList[1].employeeId &&
              this.password === this.employeeList[1].password
            ) {
              this.successLogin = true
              this.route.navigate(['/staff'])
              sessionStorage.setItem(
                'user',
                JSON.stringify(this.employeeList[1]),
              )
              this.loginService.onSuccessLogin(sessionStorage.getItem('user'))
            }
          
        }
        // FOR WRONG CREDENTIALS
        this.successLogin = false
        this.checkLogin = true
      },
      (error) => {
        console.log('Error in receiving data from in-memory-db..' + error)
      },
    )
  }
}
