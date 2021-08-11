import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  in_memory_url = 'http://localhost:4200/api/'

  private currentUserSubject = new  BehaviorSubject<any>( JSON.parse(sessionStorage.getItem('user')));
  public currentUserObservable = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient,private route:Router) {}

  onSuccessLogin(user){
    this.currentUserSubject.next(user);
  }

  validateLogin() {
    return this.http.get(this.in_memory_url + 'employeesList')
  }

  onLogout() {
    sessionStorage.removeItem('user')
    this.currentUserSubject.next(null)
    this.route.navigate(['login'])
  }
}
