import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreditsComponent } from './components/credits/credits.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { LoginComponent } from './components/login/login.component';
import { InformationsComponent } from './components/informations/informations.component';
import { CreditComponent } from './components/credit/credit.component';
import { RegisterComponent } from './components/register/register.component';
import { TextMaskModule } from 'angular2-text-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';




@NgModule({
  declarations: [
    AppComponent,
    SimulationComponent,
    CreditsComponent,
    DocumentsComponent,
    LoginComponent,
    InformationsComponent,
    CreditComponent,
    RegisterComponent,
    HeaderComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    TextMaskModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
