import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/core/services/reservation.service';

@Component({
  selector: 'app-reservation-complete',
  templateUrl: './reservation-complete.component.html',
  styleUrls: ['./reservation-complete.component.scss']
})
export class ReservationCompleteComponent implements OnInit{
  constructor(private route: ActivatedRoute, private reservationService: ReservationService){}
  confirmationId = 0;
  emailAddress = '';
  reservationDate = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.confirmationId = parseInt(id);
    if(this.confirmationId > 0)
    {
      this.reservationService.getReservationById(this.confirmationId).subscribe(value => {
        this.emailAddress = value.email;
        this.reservationDate = value.desiredDateTime
      })
    }
  }
}
