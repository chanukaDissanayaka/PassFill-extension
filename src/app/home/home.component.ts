import { Component, OnInit, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { currentView } from '../model/CurrentView.model';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as currentViewAction from '../store/currentView.action';
import * as loginDetailsAction from '../store/loginDetails.action';
import { Router } from '@angular/router';
import { User } from '../model/User.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private loggedInSessionUser$ = new Subject<User>();
  private loggedInSessionUser = this.loggedInSessionUser$.asObservable();
  private loggedinUser: Observable<User>;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private zone: NgZone) {
  }

  ngOnInit() {
    this.subscribeToEvents();
    this.loginFromSession();
  }
  subscribeToEvents() {
    this.loggedInSessionUser.subscribe(user => {
      this.authorizeSessionUser(user);
    });
  }

  login() {
    this.router.navigateByUrl('login');
  }

  signup() {
    this.router.navigateByUrl('signup');
  }

  loginFromSession() {
    chrome.storage.local.get('user', (data) => {
      if (data.user) {
        if (data.user.id && data.user.id !== 0) {
          this.loggedInSessionUser$.next(data.user);
        }
      }
    });
  }

  authorizeSessionUser(user) {
    this.zone.run(() => {
      const authorized = true;
      if (authorized) {
        this.store.dispatch(new loginDetailsAction.SetUser(user));
        this.router.navigateByUrl('dashBoard');
      } else {

      }
    });

  }


}
