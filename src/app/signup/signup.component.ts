import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { currentView } from '../model/CurrentView.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SignupRequest } from '../model/signup.model';
import { MainDataService } from '../services/mainDataService.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private currentView$: Observable<currentView>;
  private formError = false;
  private errorMessage: string;
  private showSpinner = false;

  public signupFromGroup: FormGroup;
  // new FormGroup({
  //   firstName: new FormControl('', [Validators.required]),
  //   lastName: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required]),
  //   confirm: new FormControl('', [Validators.required]),
  // });

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private formBuilder: FormBuilder,
    private mainDataService: MainDataService,
  ) {
    this.currentView$ = store.select('CurrentView');
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.signupFromGroup = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('', [Validators.required]),
    });
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }

  gotoDashBoard() {
    this.router.navigateByUrl('dashBoard');
  }

  checkPassword(password: string, confirm: string): boolean {
    if (password === confirm) {
      return true;
    }
    return false;
  }

  validateForm(form: FormGroup) {
    if (form.invalid) {
      return false;
    } else {
      if (form.value.password !== form.value.confirm) {
        this.formError = true;
        this.errorMessage = 'password does not match';
        this.signupFromGroup.controls.password.setValue('');
        this.signupFromGroup.controls.confirm.setValue('');
        return false;
      } else {
        return true;
      }
    }

  }

  onSignup() {

    if (this.validateForm(this.signupFromGroup)) {
      const signupRequest: SignupRequest = {
        firstName: this.signupFromGroup.value.firstName,
        lastName: this.signupFromGroup.value.lastName,
        email: this.signupFromGroup.value.email,
        password: this.signupFromGroup.value.password,
      };
      this.signup(signupRequest);
    } else {
      alert('did not submit');
    }
  }

  signup(signupRequest: SignupRequest) {
    this.showSpinner = true;
    this.mainDataService.signup(signupRequest).subscribe(response => {
      this.showSpinner = false;
      console.log(response);
      if (response.valid) {
        alert('welcome ' + response.user.username + ' .please login to continue');
        this.router.navigateByUrl('login');
      } else {
        alert(response.error);
      }

    },
      error => {
        this.showSpinner = false;
      });
  }

}
