import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/models';
import { NotifyService } from 'src/app/services/notify.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  @ViewChild('projectForm') projectForm!: NgForm;
  @ViewChild('editForm') editForm!: NgForm;

  projects: any = [];
  isLoggedAdmin = false;
  isUpdating = false;
  updatingID = '';


  constructor(private projectsService: ProjectsService,
    private router: Router,
    private notify: NotifyService) { }

  ngOnInit(): void {
    this.getAllProjects();
    this.checkLoggedUser();
    this.resetUpdating();
  }
  checkLoggedUser() {

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user!);
    if (userObj.isAdmin == true) {
      this.isLoggedAdmin = true;
    }

  }
  resetUpdating() {
    this.isUpdating = false;
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
      this.notify.show('Project added!', 'success');
      this.reloadCurrentRoute();
    });


  }

  onUpdate() {
    const projectId = this.updatingID;

    const updatedProject: Project = {

      title: this.editForm.value.title,
      description: this.editForm.value.description,
      image1Url: this.editForm.value.image1Url,
      image2Url: this.editForm.value.image2Url,
      image3Url: this.editForm.value.image3Url,
      image4Url: this.editForm.value.image4Url,

    }

    this.projectsService.updateProject(projectId, updatedProject).subscribe((response) => {
      this.notify.show('Project updated!', 'success');
      this.reloadCurrentRoute();

    })


  }
  getAllProjects() {

    this.projectsService.getAllProjects().subscribe((data) => {

      return this.projects.push(data);
    })

  }
  deleteProject(projectId: string) {

    this.projectsService.deleteProject(projectId).subscribe((data) => {
      this.notify.show('Project deleted!', 'success');
      this.reloadCurrentRoute();

    })
  }


  editProject(projectId: string) {

    this.isUpdating = true;
    this.updatingID = projectId;

    let project: Project = {
      title: "undefined",
      description: "undefined",
      image1Url: "undefined",
      image2Url: "undefined",
      image3Url: "undefined",
      image4Url: "undefined",
    };

    this.projectsService.getById(projectId).subscribe((response) => {

      this.notify.show('Project loaded for update!', 'warn');

      project = response as Project;

      
      this.editForm.controls['title'].setValue(project.title)
      this.editForm.controls['description'].setValue(project.description)
      this.editForm.controls['image1Url'].setValue(project.image1Url)
      this.editForm.controls['image2Url'].setValue(project.image2Url)
      this.editForm.controls['image3Url'].setValue(project.image3Url)
      this.editForm.controls['image4Url'].setValue(project.image4Url)


    });

  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


  clickImg(imgId: string, projectId: string) {

    const image = document.getElementsByClassName(`${projectId + '-image' + imgId}`)[0] as HTMLImageElement;
    const front = document.getElementsByClassName(`${projectId}` + '-image1')[0] as HTMLImageElement;
    const storage = front.src;

    front.src = image.src;
    image.src = storage;

  }
  abortUpdate() {
    this.editForm.reset();
    // this.servicesService.setIsUpdatingId(false);
    this.isUpdating = false;

    // this.subscription.unsubscribe();
    // this.subscription2.unsubscribe();

  }
}
