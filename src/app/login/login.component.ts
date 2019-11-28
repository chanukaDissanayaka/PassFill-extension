import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { currentView } from '../model/CurrentView.model';
import { AppState } from '../app.state';
import { Store, select } from '@ngrx/store';
import * as currentViewAction from '../store/currentView.action';
import * as loginDetailsAction from '../store/loginDetails.action';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { User } from '../model/User.model';
import { Router } from '@angular/router';
import { MainDataService } from '../services/mainDataService.service';
import { LoginRequest, LoginResponse } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loggedInUser: User = null;
  private currentView$: Observable<currentView>;
  private loggedInUser$: Observable<User>;

  private loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private mainDataService: MainDataService
  ) {
    this.loggedInUser$ = store.select('User');
  }

  ngOnInit() {
    this.store.select('CurrentView').subscribe(data => console.log(data));
    this.store.select('User').subscribe(data => console.log(data));
  }

  submit() {

    this.login(this.loginForm.value.email, this.loginForm.value.password);
  }


  goToSignup() {
    this.router.navigateByUrl('signup');
  }

  login(email, Password) {

    const loginReq: LoginRequest = {
      username: email,
      password: Password,
    };

    this.mainDataService.Login(loginReq).subscribe(response => {
      console.log(response);
      this.navigate(response);
    },
      error => {
        console.log(error);
        this.loginForm = new FormGroup({
          email: new FormControl(''),
          password: new FormControl(''),
        });
      });
  }

  navigate(response: LoginResponse) {

    if (response.loginStatus === true) {

      const user = this.getUser();
      this.loggedInUser = user;
      this.store.dispatch(new loginDetailsAction.SetUser(user));
      this.router.navigateByUrl('dashBoard');
    } else {
      this.loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
      });
    }

  }

  getUser() {
    const user: User = {
      id: 1,
      name: 'user',
    };
    return user;
  }
}
