import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { HttpCreditService } from 'src/app/services/http-credit.service';
import { Router } from '@angular/router';
import {Credit} from 'src/app/models/credit'

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  produitForm: FormGroup;
  produits = ['Ordinateur', 'Téléphone', 'Tablette', 'Appareil photo', 'Imprimante','Jbl','Autres...']
  loginForm: FormGroup;
  achatVal=0;
  apportVal=0;
  moisVal=0;
  montantVal=0;
  montantmois=0 ;
  valeur=0; 

  getValachat(val: number){
    this.achatVal=val
  }
  getValapport(val: number){
    this.apportVal=val
    this.montantVal=this.achatVal-this.apportVal
  }
  updateTextInput(val) {
    this.valeur=val; 
    this.montantmois= this.montantVal / this.valeur
  }
  
  
  
  constructor(private fb:FormBuilder, private _creditService:HttpCreditService, private router:Router ) {
    let FormControls = {
       montantAchat : new FormControl('', [
         Validators.required
       ]),
       apport : new FormControl('',[
         Validators.required
       ])
     }

    this.loginForm = fb.group(FormControls);
   }
  get montantAchat() {return this.loginForm.get('montantAchat');}
  get apport() {return this.loginForm.get('apport');}


  ngOnInit(): void {
    this.produitForm = this.fb.group({
      produitControl: [' ']
    });
  }
  


  register() {
    console.log(this.loginForm.value);
    let data = this.loginForm.value;
    data.montantaFinancier= this.montantVal;
    data.mensualitePaye= this.montantmois;
    data.dureeRembourssement= this.moisVal;
    let credit = new Credit(data.montantAchat,data.apport,data.montantaFinancier,this.produitForm.value.produitControl,this.valeur,data.mensualitePaye);
    console.log('hello');
    console.log(this.produitForm.value.produitControl);
    this._creditService.postCredits(credit).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/documents']);
      }
      ,
      error => console.log(error)
    )
  }

}
