import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vrs2.0';
  showHome: boolean = true;
  constructor(private bs: BookService){}

}
