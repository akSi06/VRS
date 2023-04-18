import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { BookedComponent } from './booked/booked.component';

const routes: Routes = [{path:"booked", component:BookedComponent}, {path:"", component:BookingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
