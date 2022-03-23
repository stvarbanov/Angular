import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {


  @ViewChild('loginForm') loginForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

  }

  onSubmit() {
    alert(JSON.stringify(this.loginForm.value));
  }

}
