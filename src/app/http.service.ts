import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { RSVP } from './rsvp';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private formSubmitUrl = 'https://rsvp-spring-service.herokuapp.com/karma/v1/rsvp';

  constructor(private http: HttpClient) { }

  submitForm(rsvp: RSVP) {
    this.http.post(this.formSubmitUrl, rsvp).subscribe(res => console.log(rsvp), err => console.log("Error occured."));
  }
}
