import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {


  @ViewChild('registerForm') registerForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

  }

  onSubmit() {
    alert(JSON.stringify(this.registerForm.value));
  }

}
