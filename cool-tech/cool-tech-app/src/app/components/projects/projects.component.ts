import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/models';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  @ViewChild('projectForm') projectForm!: NgForm;

  isLoggedAdmin = false;

  projects: any = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getAllProjects();
    this.checkLoggedUser()
    console.log(this.projects)
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
    const newProject: Project = {

      title: this.projectForm.value.title,
      description: this.projectForm.value.description,
      image1Url: this.projectForm.value.image1Url,
      image2Url: this.projectForm.value.image2Url,
      image3Url: this.projectForm.value.image3Url,
      image4Url: this.projectForm.value.image4Url

    }

    this.projectsService.createProject(newProject).subscribe((project) => {
      this.projectForm.reset();
    });


  }
  getAllProjects() {

    this.projectsService.getAllProjects().subscribe((data) => {

      return this.projects.push(data);
    })

  }
  deleteProject(projectId: string) {

    this.projectsService.deleteProject(projectId).subscribe((data) => {

      this.getAllProjects();

    })
  }
}
