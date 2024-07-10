import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  myObservable() : Observable<number>
  {
    return of(1,2,3,4,5)
  }
}
