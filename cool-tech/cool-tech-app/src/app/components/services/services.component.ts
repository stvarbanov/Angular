import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from 'src/app/models/models';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  @ViewChild('serviceForm') serviceForm!: NgForm;

  services: any = [];
  isLoggedAdmin = false;


  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {

    this.getAllServices();
    this.checkLoggedUser();
    console.log(this.services);

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
      this.serviceForm.reset();

    });
  }
  getAllServices() {
    this.servicesService.getAllServices().subscribe((data) => {

      return this.services.push(data);
    })
  }
  deleteService(serviceId: string) {
   
    this.servicesService.deleteService(serviceId).subscribe((data) => {

      this.getAllServices();
      //list of requests should update
    })

  }
}
