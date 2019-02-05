import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { RSVP } from './rsvp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private rsvp: RSVP;

  constructor(private httpService: HttpService) {

  }

  ngOnInit(): void {
  }

  submitFormComming(name, number) {
    if (name.value !== "" && number.value !== "") {
      this.rsvp = new RSVP(name.value, number.value, true);
      this.httpService.submitForm(this.rsvp);
      document.getElementById('id01').style.display = 'none';
    } else {
      document.getElementById('id01').style.display = 'none';

    }
  }

  submitFormNotComming(name, number) {
    if(name.value !== "" && number.value !== ""){
    this.rsvp = new RSVP(name.value, number.value, false);
    this.httpService.submitForm(this.rsvp);
    document.getElementById('id01').style.display = 'none';
    }else {
      document.getElementById('id01').style.display = 'none';
    }
  }
}