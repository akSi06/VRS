import { Component } from '@angular/core';
import { BookService } from '../book.service';
@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css']
})
export class BookedComponent {
  bFrom = ""; bTo = ""; bLocation = ""; bCar = "";
  
  constructor(private bs: BookService) {
    this.bFrom = this.bs.bFrom;
    this.bTo = this.bs.bTo;
    this.bLocation = this.bs.bLocation;
    this.bCar = this.bs.bCar;
    console.log("this.bFrom", this.bTo, this.bLocation, this.bCar)
  }
}