import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  
  @ViewChild('projectForm') projectForm!: NgForm;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  onSubmit() {
    alert(JSON.stringify(this.projectForm.value));
  }

}
