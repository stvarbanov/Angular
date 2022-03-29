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

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

  }

  onSubmit() {
    alert(JSON.stringify(this.requestForm.value));

  }

}
