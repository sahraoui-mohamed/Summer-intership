import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient: HttpClient) { }

  getAllInfos() {
    return this.httpClient.get<any>('http://192.168.1.4:8080/image/ocrinfo1/');
  }

  getAllInfos2() {
    return this.httpClient.get<any>('http://192.168.1.4:8080/image/ocrinfo2/');
  }
}
