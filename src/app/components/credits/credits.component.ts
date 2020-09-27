import { Component, OnInit } from '@angular/core';
//import {HttpCreditService, Credit} from './service/http-credit.service';
import {HttpCreditService} from "src/app/services/http-credit.service";
import {Credit} from 'src/app/models/credit'

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  credits: Credit[];

  constructor(
    private httpCreditService: HttpCreditService
  ) {}

  ngOnInit(): void {
    this.httpCreditService.getAllCredits().subscribe(
      response => this.handleSuccessfulResponse(response),);
  }

  handleSuccessfulResponse(response) {
    this.credits = response;
    console.log(response);
}

}

