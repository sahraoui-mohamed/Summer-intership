import { Component, OnInit } from '@angular/core';
import {HttpCreditService} from "src/app/services/http-credit.service";
import {Credit} from 'src/app/models/credit'
@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})

export class CreditComponent implements OnInit {

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

