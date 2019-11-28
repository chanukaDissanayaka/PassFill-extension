import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

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

  gotoLogin() {
    this.router.navigateByUrl('login');
  }

}
