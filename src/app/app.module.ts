import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { currentViewReducer } from './store/currentView.reducers';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { Routes, RouterModule } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';

import { ReactiveFormsModule } from '@angular/forms';
import { MainDataService } from './services/mainDataService.service';
import { HttpClientModule } from '@angular/common/http';
import { loginDetailsReducer } from './store/loginDetails.reducers';

import { MatProgressSpinnerModule, MatCardModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'dashBoard', component: DashBoardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    Ng2LoadingSpinnerModule.forRoot({}),
    StoreModule.forRoot({ CurrentView: currentViewReducer, User: loginDetailsReducer }, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    RouterModule.forRoot(
      appRoutes
    ),
    WebcamModule,
  ],
  providers: [MainDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
