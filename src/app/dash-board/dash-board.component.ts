import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as loginDetailsAction from '../store/loginDetails.action';
import { User } from '../model/User.model';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  image1 = '';
  imageString1: any;
  fileData1: File = null;
  showImage1 = false;
  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  capture() {

  }

  fileProgress1(fileInput: any) {
    this.fileData1 = fileInput.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileData1);

    reader.addEventListener('load', () => {
      this.imageString1 = reader.result;
    }, false);
  }

  onSubmitImage1() {
    this.image1 = this.imageString1;
    this.showImage1 = true;
    // this.mainDataService.GetData();
    // const data = { name: 'image1', image: this.imageString1 };

    // const req = this.mainDataService.submitImage(data);
    // req.subscribe(res => {
    //   this.image1 = res;
    //   this.showImage1 = true;
    // }, err => {
    //   console.log(err);
    // });
  }

  logout() {
    const user: User = {
      id: 0,
      username: null
    };
    this.store.dispatch(new loginDetailsAction.SetUser(user));
    chrome.storage.local.remove('user');
    this.router.navigateByUrl('');
  }

}
