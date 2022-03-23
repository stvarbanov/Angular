import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit, AfterViewInit {


  @ViewChild('deviceForm') deviceForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

  }

  onSubmit() {
    alert(JSON.stringify(this.deviceForm.value));
  }

}
