import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Request } from 'src/app/models/models';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit, AfterViewInit {

  @ViewChild('requestForm') requestForm!: NgForm;

  isLoggedIn: boolean = false;
  isLoggedAdmin: boolean = false;

  requests: Request[] = [];
  constructor() { }

  ngOnInit(): void {
    this.checkLoggedUser();
  }
  ngAfterViewInit(): void {

  }

  onSubmit() {
    alert(JSON.stringify(this.requestForm.value));

  }

  checkLoggedUser() {

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user!);
    if (userObj) {
      this.isLoggedIn = true;
    }
    if (userObj.isAdmin == true) {
      this.isLoggedAdmin = true;
      this.isLoggedIn = false;
    }
  }


  getAllRequests(){

  }

}
