import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { TokenResponse } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:7039/';
  tokenLocation = 'JWT_Token';
  private tokenSubject: BehaviorSubject<string | null>;
  public token: Observable<string | null>;
  constructor(private htppClient : HttpClient, private router: Router)
   { 
    this.tokenSubject = new BehaviorSubject(localStorage.getItem(this.tokenLocation));
    this.token = this.tokenSubject.asObservable();
   }

  login(loginForm: FormGroup)
  {
    return this.htppClient.post<TokenResponse>(this.baseUrl + 'login/v1/login', loginForm.getRawValue()).pipe(map(value =>
      {
        localStorage.setItem(this.tokenLocation, value.token);
        this.tokenSubject.next(value.token);
        return value;
      }));  
  }

  logout()
  {
    localStorage.removeItem(this.tokenLocation);
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }

  getToken(){
    return this.tokenSubject.value;
  }
}
