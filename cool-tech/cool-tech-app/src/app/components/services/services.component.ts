import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  @ViewChild('serviceForm') serviceForm!: NgForm;
  isLoggedAdmin = false;

  constructor() { }

  ngOnInit(): void {
    this.checkLoggedUser()

  }
  checkLoggedUser() {

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user!);
    if (userObj.isAdmin == true) {
      this.isLoggedAdmin = true;
    }

  }
  ngAfterViewInit(): void {

  }

  onSubmit() {
    alert(JSON.stringify(this.serviceForm.value));
  }
}
