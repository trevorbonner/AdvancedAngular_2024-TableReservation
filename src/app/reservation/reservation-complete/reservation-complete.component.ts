import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-complete',
  templateUrl: './reservation-complete.component.html',
  styleUrls: ['./reservation-complete.component.scss']
})
export class ReservationCompleteComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  confirmationId = 0;
  emailAddress = '';
  reservationDate = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.confirmationId = parseInt(id);
    if(this.confirmationId > 0)
    {
      //call service with the id to get the correct data
      this.emailAddress = 'test@test.ca';
      this.reservationDate = new Date().toString();
    }
  }
}
