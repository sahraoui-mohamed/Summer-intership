import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documentForm: FormGroup;

  constructor(private fb:FormBuilder, private router:Router) {
  }

 

  ngOnInit(): void {
  }

  passer(){
    console.log(this.documentForm.value);
    this.router.navigate(['/credits']);
  }

}
