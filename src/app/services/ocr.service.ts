import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Ocr } from 'src/app/models/ocr';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  constructor(private httpClient: HttpClient) { }

  postCredits(information) {
    return this.httpClient.post<Ocr[]>('http://192.168.1.4:8080/test/informations',information); 
  }
}
