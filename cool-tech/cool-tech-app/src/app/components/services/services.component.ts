import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  @ViewChild('serviceForm') serviceForm!: NgForm;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    
  }

  onSubmit() {
    alert(JSON.stringify(this.serviceForm.value));
  }
}
