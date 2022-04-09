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

  services: any = [];
  isLoggedAdmin = false;



  constructor(private servicesService: ServicesService,
     private router: Router) { }

  ngOnInit(): void {

    this.getAllServices();
    this.checkLoggedUser();

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

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
