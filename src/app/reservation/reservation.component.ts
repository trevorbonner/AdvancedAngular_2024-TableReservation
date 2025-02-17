import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dateIsInPastValidator } from '../core/validators/validators';
import { ReservationService } from '../core/services/reservation.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  
  constructor(private router: Router, 
    private reservationService: ReservationService)
  {}

  reservationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.minLength(10), Validators.maxLength(13)]),
    placeSettings: new FormControl(0, Validators.required),
    desiredDateTime: new FormControl(new Date(), [Validators.required, dateIsInPastValidator])
  });


  ngOnInit(): void {
    this.reservationForm.patchValue({
      firstName: 'Trevor',
      lastName: 'Bonner',
      desiredDateTime: new Date('mm/dd/yyyy'),
      placeSettings: 4
    });
    //in theory i would check for a signed in user if one existed i would try to prepopulate
  }

  onSubmit()
  {
    if(this.reservationForm.valid)
    {   
      this.reservationService.createReservation(this.reservationForm).subscribe(
        value => this.router.navigate(['/reservation-complete', {id: value.id}])         
      );
    }  
    else{
      alert('this form is not valid'); 
    }
  }

}
