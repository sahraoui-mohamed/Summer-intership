import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerConseiller(conseiller) {
    return this.http.post<any>("http://192.168.1.4:8080/registerr",conseiller); 
  }

  loginUser(conseiller) {
    return this.http.post<any>("http://192.168.1.4:8080/loginn", conseiller);
  }
}
