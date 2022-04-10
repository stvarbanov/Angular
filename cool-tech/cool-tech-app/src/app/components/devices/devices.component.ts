import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Device } from 'src/app/models/models.js';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  providers: [DeviceService]
})
export class DevicesComponent implements OnInit, AfterViewInit {

  devices: any = [];
  isLoggedAdmin = false;
  isUpdating = false;
  updatingID = '';

  @ViewChild('deviceForm') deviceForm!: NgForm;
  @ViewChild('editForm') editForm!: NgForm;

  constructor(
    private deviceService: DeviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllDevices();
    this.checkLoggedUser()
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

  getAllDevices() {
    this.deviceService.loadAllDevices().subscribe((data) => {
      this.devices.push(data);
    })
  }
  ngAfterViewInit(): void {


  }

  onSubmit() {

    const newDevice: Device = {

      model: this.deviceForm.value.model,
      brand: this.deviceForm.value.brand,
      price: this.deviceForm.value.price,
      class: this.deviceForm.value.class,
      imageUrl: this.deviceForm.value.imageUrl,
      description: this.deviceForm.value.description,

    }


    this.deviceService.createDevice(newDevice).subscribe((response) => {

      this.reloadCurrentRoute();

    }, (error) => {
      console.log('post device error: ' + error);
    }
    );
  }

  onUpdate() {
    const deviceId = this.updatingID;

    const updatedDevice: Device = {

      model: this.editForm.value.model,
      brand: this.editForm.value.brand,
      price: this.editForm.value.price,
      class: this.editForm.value.class,
      imageUrl: this.editForm.value.imageUrl,
      description: this.editForm.value.description,

    }

    this.deviceService.updateDevice(deviceId, updatedDevice).subscribe((response)=>{

      this.reloadCurrentRoute();

    })


  }

  deleteDevice(deviceId: string) {

    this.deviceService.deleteDevice(deviceId).subscribe((data) => {

      this.reloadCurrentRoute();
      //list of requests should update
    })
  }

  editDevice(deviceId: string) {

    this.isUpdating = true;
    this.updatingID = deviceId;

    let device: Device = {
      model: "undefined",
      brand: "undefined",
      class: "undefined",
      price: "undefined",
      imageUrl: "undefined",
      description: "undefined"
    };

    this.deviceService.getById(deviceId).subscribe((response) => {


      device = response as Device;

      this.editForm.controls['model'].setValue(device.model)
      this.editForm.controls['brand'].setValue(device.brand)
      this.editForm.controls['class'].setValue(device.class)
      this.editForm.controls['price'].setValue(device.price)
      this.editForm.controls['imageUrl'].setValue(device.imageUrl)
      this.editForm.controls['description'].setValue(device.description)

    });

  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  abortUpdate(){
    this.isUpdating = false;
    this.updatingID ='';
  }
}