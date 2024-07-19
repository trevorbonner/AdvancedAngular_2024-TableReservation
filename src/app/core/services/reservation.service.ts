import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private htppClient : HttpClient) { }

  baseUrl = 'https://localhost:7039/';

  getReservationById(id: number) : Observable<Reservation>
  {
    return this.htppClient.get<Reservation>(this.baseUrl + 'reservation/v1/' + id);
  }

  createReservation(reservationForm: FormGroup) : Observable<Reservation>
  {
      // this.htppClient.post<Reservation>(this.baseUrl + 'reservation/v1/CreateReservation', this.reservationForm.getRawValue()).subscribe(
      //   value => this.router.navigate(['/reservation-complete', {id: value.id}])  
      // );

    return this.htppClient.post<Reservation>(this.baseUrl + 'reservation/v1/CreateReservation', reservationForm.getRawValue()); 
  }
}
