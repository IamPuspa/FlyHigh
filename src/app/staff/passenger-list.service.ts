import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Passenger } from './passenger.model'

@Injectable({
  providedIn: 'root',
})
export class PassengerListService {
  SERVER_URL: string = 'http://localhost:4200/api/'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }
 
  pList
  passengerList: Object

  constructor(private http: HttpClient) {}

  public getLondonPassengers() {
    return this.http.get(this.SERVER_URL + 'Londonpassengers')
  }

  getNewYorkPassengers() {
    return this.http.get(this.SERVER_URL + 'NewYorkPassengers')
  }

  getSeoulPassengers() {
    return this.http.get(this.SERVER_URL + 'SeoulPassengers')
  }

  getHongKongPassengers() {
    return this.http.get(this.SERVER_URL + 'HongKongPassengers')
  }

  public updatePassengerL(passenger: Passenger) {
    console.log(passenger)
    return this.http.put(
      this.SERVER_URL + 'Londonpassengers',
      passenger,
      this.httpOptions,
    )
  }

  public updatePassengerNY(passenger: Passenger) {
    return this.http.put(
      this.SERVER_URL + 'NewYorkPassengers',
      passenger,
      this.httpOptions,
    )
  }

  public updatePassengerS(passenger: Passenger) {
    return this.http.put(
      this.SERVER_URL + 'SeoulPassengers',
      passenger,
      this.httpOptions,
    )
  }

  public updatePassengerHK(passenger: Passenger) {
    return this.http.put(
      this.SERVER_URL + 'HongKongPassengers',
      passenger,
      this.httpOptions,
    )
  }

  getPassengerList(id){

    switch (id) {
      case '1':
        this.getLondonPassengers().subscribe(response =>{
          this.pList = response;
          
        })
        return this.pList;
        break;
    
      default:
        break;
    }
  }

 
}
