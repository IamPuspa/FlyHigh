export class Passenger {
    public seatNo:number;

    constructor(p:{id:number,pid:number,name:string,address:string,seatNo:number,passport:string,checkedInStatus:string,
        infants:number,wheelchair:string,mealsOpted:string,services:[]}){}

    public set seatNumber(value:number){
        this.seatNo = value;
    }
  }