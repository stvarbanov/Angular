import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/models/models';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  @ViewChild('serviceForm') serviceForm!: NgForm;
  @ViewChild('editServiceForm') editServiceForm!: NgForm;

  services: any = [];
  isLoggedAdmin = false;

  isUpdating = false;
  updatingID = '';

  constructor(private servicesService: ServicesService,
    private router: Router) { }

  ngOnInit(): void {

    this.getAllServices();
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
  ngAfterViewInit(): void {

  }

  onSubmit() {

    const newService: Service = {

      title: this.serviceForm.value.title,
      imageUrl: this.serviceForm.value.imageUrl,
      description: this.serviceForm.value.description,

    }

    this.servicesService.createService(newService).subscribe((service) => {
      // this.serviceForm.reset();
      this.reloadCurrentRoute();

    });


  }
  onUpdate() {
    const serviceId = this.updatingID;

    const updatedService: Service = {

      title: this.editServiceForm.value.title,
      imageUrl: this.editServiceForm.value.imageUrl,
      description: this.editServiceForm.value.description,

    }

    this.servicesService.updateService(serviceId, updatedService).subscribe((response) => {

      this.reloadCurrentRoute();

    })


  }
  getAllServices() {
    this.servicesService.getAllServices().subscribe((data) => {

      return this.services.push(data);
    })
  }
  deleteService(serviceId: string) {

    this.servicesService.deleteService(serviceId).subscribe(() => {

      this.reloadCurrentRoute();

    })

  }
  editService(serviceId: string) {

    this.isUpdating = true;
    this.updatingID = serviceId;

    let service: Service = {
      title: "undefined",
      imageUrl: "undefined",
      description: "undefined"
    };

    this.servicesService.getById(serviceId).subscribe((response) => {


      service = response as Service;

      this.editServiceForm.controls['title'].setValue(service.title)
      this.editServiceForm.controls['imageUrl'].setValue(service.imageUrl)
      this.editServiceForm.controls['description'].setValue(service.description)

    });

  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  resetUpdating() {
    this.isUpdating = false;
  }

  abortUpdate() {
    this.isUpdating = false;
    this.updatingID = '';
  }



}
