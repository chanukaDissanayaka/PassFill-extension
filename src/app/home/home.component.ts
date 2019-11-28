import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { currentView } from '../model/CurrentView.model';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as currentViewAction from '../store/currentView.action';
import { Router } from '@angular/router';
import { User } from '../model/User.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private loggedinUser: Observable<User>;
  constructor(private store: Store<AppState>, private router: Router) {
  }

  ngOnInit() {
    // this.store.select('User').subscribe(user => {
    //   if (user.id === 0) {
    //     this.router.navigateByUrl('dashBoard');
    //   }
    // });
  }

  login() {

    this.router.navigateByUrl('login');

    // this.homeView = false;
    // this.signupView = false;
    // this.loginView = true;
    // const updatedView: currentView = {
    //   homeView: this.homeView,
    //   loginView: this.loginView,
    //   signupView: this.signupView,
    // };
    // this.store.dispatch(new currentViewAction.AddView(updatedView));
  }

  signup() {
    this.router.navigateByUrl('signup');

    // this.homeView = false;
    // this.signupView = true;
    // this.loginView = false;
    // const updatedView: currentView = {
    //   homeView: this.homeView,
    //   loginView: this.loginView,
    //   signupView: this.signupView,
    // };
    // this.store.dispatch(new currentViewAction.AddView(updatedView));
  }

}
