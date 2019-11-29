import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  private showProgress: boolean;

  private loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private mainDataService: MainDataService,
    private zone: NgZone,
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

  checkBg() {
    chrome.runtime.sendMessage({ name: 'test', message: 'hello' }, res => {
      const loggedInUser: User = { id: 1, username: 'abc' };
      chrome.storage.local.set({ user: loggedInUser }, () => {
        chrome.storage.local.get('user', (data) => {
          console.log(data.user);
          console.log(data.user.id);
          if (data.user.id && data.user.id !== 0) {
            alert('data');
          }
        });
      });
      console.log(res);
      alert(res);
    });
  }

  clearStorageTest() {
    chrome.storage.local.clear();
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
      this.onLoginResponse(response);
    },
      error => {
        console.log(error);
        this.loginForm = new FormGroup({
          email: new FormControl(''),
          password: new FormControl(''),
        });
      });
  }

  onLoginResponse(response: LoginResponse) {
    if (response.loginStatus) {
      this.loggedInUser = response.loggedInUser;
      this.store.dispatch(new loginDetailsAction.SetUser(response.loggedInUser));
      this.setSessionUser(response.loggedInUser);
      this.router.navigateByUrl('dashBoard');
    } else {
      this.loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
      });
    }
  }

  setSessionUser(loggedInUser: User) {
    chrome.storage.local.set({ user: loggedInUser }, () => { });
  }


  getUser() {
    const user: User = {
      id: 1,
      username: 'user',
    };
    return user;
  }
}
