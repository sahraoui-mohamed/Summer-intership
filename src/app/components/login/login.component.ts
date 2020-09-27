import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Conseiller } from 'src/app/models/conseiller';
import { JwtHelperService } from "@auth0/angular-jwt";
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message ="";

  constructor(private fb: FormBuilder,private _registerService:RegisterService  , private router: Router) {
    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    }

    this.loginForm = fb.group(formControls);
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }


  ngOnInit(): void {
  }

  login(){
    let data = this.loginForm.value;
    let user = new Conseiller(null, null, null, null, data.email, null, data.password);

    this._registerService.loginUser(user).subscribe(
      result => {
        console.log(result);
        let data1 = result;
        if(data1.token != "error"){
          console.log("bien");
          this.message= "Succeed";
          this.router.navigate(['/credit']);
        }else{
          console.log("non");
          this.message= "Email ou mot de passe incorrect";
        }

      },
      error => {
        console.log(error);
      }
    );
  }

}

