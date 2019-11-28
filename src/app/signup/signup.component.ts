import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { currentView } from '../model/CurrentView.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private currentView$: Observable<currentView>;
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.currentView$ = store.select('CurrentView');
  }

  ngOnInit() { }

  goToLogin() {
    this.router.navigateByUrl('login');
  }

  gotoDashBoard() {
    this.router.navigateByUrl('dashBoard');
  }

}
