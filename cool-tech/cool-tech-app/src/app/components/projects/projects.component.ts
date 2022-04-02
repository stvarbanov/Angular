import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  
  @ViewChild('projectForm') projectForm!: NgForm;

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
    alert(JSON.stringify(this.projectForm.value));
  }

}
