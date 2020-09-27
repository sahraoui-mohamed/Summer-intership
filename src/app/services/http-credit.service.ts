import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Credit } from '../models/credit';

// This is a service class
@Injectable({
  providedIn: 'root'
})

export class HttpCreditService{

  constructor(private httpClient: HttpClient) { }

  getAllCredits() {
    return this.httpClient.get<any>('http://192.168.1.4:8080/api/credits/');
  }

  postCredits(credit) {
    return this.httpClient.post<Credit[]>('http://192.168.1.4:8080/api/credits',credit); 
  }
  
}