import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulationComponent } from './components/simulation/simulation.component';
import { CreditsComponent } from './components/credits/credits.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { LoginComponent } from './components/login/login.component';
import { InformationsComponent } from './components/informations/informations.component';
import { CreditComponent } from './components/credit/credit.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert/alert.component';


const routes: Routes = [
  {
    path : "",
    component : SimulationComponent
  },
  {
    path : "credits",
    component : CreditsComponent
  },
  {
    path :"documents",
    component : DocumentsComponent
  },
  {
    path :"login",
    component : LoginComponent
  },
  {
    path : "informations",
    component : InformationsComponent
  },
  {
    path :"credit",
    component : CreditComponent
  },
  {
    path :"register",
    component : RegisterComponent
  },
  {
    path :"alert",
    component : AlertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
