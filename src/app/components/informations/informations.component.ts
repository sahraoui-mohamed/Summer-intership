import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Ocr} from 'src/app/models/ocr';
import { OcrService } from 'src/app/services/ocr.service';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import {InfoService} from "src/app/services/info.service";
import {Info1} from 'src/app/models/info1';
import {Info2} from 'src/app/models/info2';
import {Credit} from 'src/app/models/credit';
import {HttpCreditService} from "src/app/services/http-credit.service";
@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {
  paysForm: FormGroup;
  pays = ['Allemagne', 'Autriche', 'Belgique','Bulgarie', 'Chypre', 'Croatie', 'Danemark', 'Espagne', 'Estonie', 'Finlande', 'France', 'Grèce', 'Hongrie', 'Irlande', 'Italie', 'Lettonie', 'Lituanie', 'Luxembourg', 'Malte', 'Pays-Bas','Pologne', 'Portugal', 'République tchèque', 'Roumanie', 'Slovaquie', 'Slovénie', 'Suède'];
  credits: Credit[];
  dateMask = [ /[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[0-9]/, /\d/, /\d/, /\d/];
  ribb=[/[0-9]/, /\d/,/\d/,/\d/,/\d/,' ','0',/\d/,/\d/,' ','0',/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,' ',/\d/,/\d/,];
  telephoneMask = ['+','3','3',' ',/[0-9]/ ,' ', /[0-9]/, /[0-9]/, ' ', /[0-9]/, /\d/, ' ', /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/];
  info1: Info1[];
  info2: Info2[];
  loginForm1: FormGroup;
  loginForm2: FormGroup;
  loginForm3: FormGroup;
  loginForm4: FormGroup;
  loginForm5: FormGroup;
  cin="";
  rib="";
  selectedFile1: File;
  selectedFile2: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName1: any;
  imageName2: any;
  nom:any;
  nom1:any;
  prenom1:any;
  cin1:any;
  date1:any;
  adress1:any;
  code1:any;
  ville1:any;

  public onFileChanged1(event) {
    //Select File
    this.selectedFile1 = event.target.files[0];
  }
  public onFileChanged2(event) {
    //Select File
    this.selectedFile2 = event.target.files[0];
  }
  
  constructor(private fb1:FormBuilder, private _ocrService:OcrService, private router:Router, private httpClient: HttpClient,private CreditService: HttpCreditService ,private httpCreditService:InfoService) {
    let FormControls1 ={
      adresRevenuess : new FormControl('', [
        Validators.required
      ]),
      Autres : new FormControl('',[
        Validators.required
      ]),
      immobilier : new FormControl('',[
        Validators.required
      ]),
      creditencour : new FormControl('',[
        Validators.required
      ])
    }
    this.loginForm1 = fb1.group(FormControls1);

    let FormControls2 ={
      Profession : new FormControl('', [
        Validators.required
      ]),
      Depuis : new FormControl('',[
        Validators.required
      ]),
      Télephone : new FormControl('',[
        Validators.required
      ])
    }
    this.loginForm2 = fb1.group(FormControls2);

    let FormControls3 ={
      inputRib : new FormControl('', [
        Validators.required
      ]),
      inputMontant : new FormControl('',[
        Validators.required
      ])
    }
    this.loginForm3 = fb1.group(FormControls3);

    let FormControls4 ={
      Nom : new FormControl('', [
        Validators.required
      ]),
      Prénom : new FormControl('',[
        Validators.required
      ]),
      inputEmail : new FormControl('', [
        Validators.required
      ]),
      inputDate : new FormControl('',[
        Validators.required
      ]),
      inputAddress : new FormControl('', [
        Validators.required
      ]),
      inputVille : new FormControl('',[
        Validators.required
      ]),
      inputCodePostale : new FormControl('', [
        Validators.required
      ]),
      inputPays : new FormControl('',[
        Validators.required
      ])
    }
    this.loginForm4 = fb1.group(FormControls4);

    let FormControls5 ={
      justificationcin : new FormControl('', [
        Validators.required
      ]),
      justificationrib : new FormControl('',[
        Validators.required
      ])
    }
    this.loginForm5 = fb1.group(FormControls5);
   }
   
  get adresRevenuess() {return this.loginForm1.get('adresRevenuess');}
  get Autres() {return this.loginForm1.get('Autres');}
  get immobilier() {return this.loginForm1.get('immobilier');}
  get creditencour() {return this.loginForm1.get('creditencour');}

  get Profession() {return this.loginForm1.get('Profession');}
  get Depuis() {return this.loginForm1.get('Depuis');}
  get Télephone() {return this.loginForm1.get('Télephone');}

  get inputRib() {return this.loginForm1.get('inputRib');}
  get inputMontant() {return this.loginForm1.get('inputMontant');}

  get Nom() {return this.loginForm1.get('Nom');}
  get Prénom() {return this.loginForm1.get('Prénom');}
  get inputEmail() {return this.loginForm1.get('inputEmail');}
  get inputDate() {return this.loginForm1.get('inputDate');}
  get inputAddress() {return this.loginForm1.get('inputAddress');}
  get inputVille() {return this.loginForm1.get('inputVille');}
  get inputCodePostale() {return this.loginForm1.get('inputCodePostale');}
  get inputPays() {return this.loginForm1.get('inputPays');}

  get justificationcin() {return this.loginForm1.get('justificationcin');}
  get justificationrib() {return this.loginForm1.get('justificationrib');}

  ngOnInit(): void {
    this.CreditService.getAllCredits().subscribe(
      response => this.handleSuccessfulResponse1(response),);
    this.paysForm = this.fb1.group({
      paysControl: [' ']
    });
  }
  handleSuccessfulResponse1(response) {
    this.credits = response;
    console.log(response);
}

  submit(){
    console.log('hello');
    console.log(this.loginForm1.value);
    console.log(this.loginForm2.value);
    console.log(this.loginForm3.value);
    console.log(this.loginForm4.value);
    console.log(this.loginForm5.value);

    let data1 = this.loginForm1.value;
    let data2 = this.loginForm2.value;
    let data3 = this.loginForm3.value;
    let data4 = this.loginForm4.value;

    for (var info of this.info1) {
      this.nom1= info.nom;
      this.prenom1= info.prenom;
      this.cin1= info.cin;
      this.date1= info.date;
    }
    for (var infos of this.info2) {
      this.adress1= infos.adresse;
      this.code1= infos.code;
      this.ville1= infos.ville;
    }
    

    let information = new Ocr(this.nom1,this.prenom1,this.cin1,this.date1,this.adress1,this.ville1,this.code1,this.paysForm.value.paysControl,data3.inputRib,data3.inputMontant,data2.Profession,data2.Depuis,data2.Télephone,data1.adresRevenuess,data1.Autres,data1.immobilier,data1.creditencour);
    this._ocrService.postCredits(information).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/alert']);
      }
      ,
      error => console.log(error)
    )
  }

  onUpload() {
    console.log(this.selectedFile1);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile1, this.selectedFile1.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
    this.httpClient.post('http://localhost:8080/image/uploadocr', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
  onUpload2() {
    console.log(this.selectedFile2);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile2, this.selectedFile2.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
      this.httpClient.post('http://localhost:8080/image/uploadocr2', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.selectedFile1.name)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
      this.httpClient.get('http://localhost:8080/image/get1/' + this.selectedFile2.name)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
      this.httpCreditService.getAllInfos().subscribe(
        response => this.handleSuccessfulResponse(response),);

      this.httpCreditService.getAllInfos2().subscribe(
        response => this.handleSuccessfulResponse2(response),);

  }
  handleSuccessfulResponse(response) {
    this.info1 = response;
    console.log(response);
}
  handleSuccessfulResponse2(response) {
    this.info2 = response;
    console.log(response);
}

}
