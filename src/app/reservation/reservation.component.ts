import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dateIsInPastValidator } from '../core/validators/validators';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor(private router: Router)
  {}

  reservationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.minLength(10), Validators.maxLength(13)]),
    placeSettings: new FormControl('', Validators.required),
    desiredDateTime: new FormControl('', [Validators.required, dateIsInPastValidator])
  });


  ngOnInit(): void {
    this.reservationForm.patchValue({
      firstName: 'Trevor',
      lastName: 'Bonner',
      desiredDateTime: new Date().toString(),
      placeSettings: '4'
    });
    //in theory i would check for a signed in user if one existed i would try to prepopulate
  }

  onSubmit()
  {
    if(this.reservationForm.valid)
    {
      //here is where i would call the service to add the reservation to my api
      //api will retutn the id/confirmation number of the added reservation
      const id = 1
      this.router.navigate(['/reservation-complete', {id: id}])
    }  

    alert('this form is not valid'); 
  }

}
