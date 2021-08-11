import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailsServiceService {

  SERVER_URL: string = "http://localhost:4200/api/";

  constructor(private http : HttpClient) { }

  getFlights(){
    return this.http.get(this.SERVER_URL + 'flights');
  }


}
