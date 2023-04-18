import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [DatePipe]
})
export class BookingComponent {
  minDate: string | null;

  constructor(private datePipe: DatePipe, private bs: BookService) {
    // Get the current date and format it using DatePipe
    const currentDate = new Date();
    this.minDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
  }
  
  city = ["Ahmedabad", "Goa", "Jamshedpur", "Mumbai", "Bangalore"];
  carList = [
      {name: 'Maruti Swift', location: 'Mumbai'},
      {name: 'Maruti Baleno', location: 'Bangalore'},
      {name: 'Tata Tiago', location: 'Bangalore'},
      {name: 'Tata Tiago EV', location: 'Jamshedpur'},
      {name: 'Hyundai i20', location: 'Jamshedpur'},
      {name: 'Maruti Wagon R', location: 'Goa'},
      {name: 'Tata Altroz', location: 'Ahmedabad'},
      {name: 'Renault KWID', location: 'Mumbai'},
      {name: 'Hyundai Verna', location: 'Jamshedpur'},
      {name: 'Audi A4', location: 'Ahmedabad'},
      {name: 'Maruti Dzire', location: 'Goa'},
      {name: 'Volkswagen Virtus', location: 'Bangalore'},
      {name: 'Honda City', location: 'Goa'},
      {name: 'Skoda Slavia', location: 'Mumbai'},
      {name: 'Hyundai Aura', location: 'Ahmedabad'},
      {name: 'Honda Amaze', location: 'Goa'},
      {name: 'Volkswagen Taigun', location: 'Goa'},
      {name: 'Kia Sonet', location: 'Ahmedabad'},
      {name: 'Kia Seltos', location: 'Mumbai'},
      {name: 'Tata Harrier', location: 'Bangalore'},
      {name: 'Hyundai Alcazar', location: 'Goa'},
      {name: 'Renault Triber', location: 'Jamshedpur'},
      {name: 'Mahindra Scorpio', location: 'Jamshedpur'},
      {name: 'Mahindra XUV700', location: 'Mumbai'}
    ];    
    result:{name:string, location:string}[] = [];
    specificLoc(car:any) {
    this.result = this.carList.filter(item => item.location === car);
    console.log(this.result);
  }


  bookSuccess(bFrom:any, bTo:any, bLocation:any, bCar:any){
    this.bs.bFrom = bFrom;
    this.bs.bTo = bTo;
    this.bs.bLocation = bLocation;
    this.bs.bCar = bCar;
  }
}
