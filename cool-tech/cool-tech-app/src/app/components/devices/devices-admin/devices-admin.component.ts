import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Device } from 'src/app/models/models';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-devices-admin',
  templateUrl: './devices-admin.component.html',
  styleUrls: ['./devices-admin.component.css'],
  // inputs: ['isUpdating', 'updatingId', 'isLoggedAdmin']
})
export class DevicesAdminComponent implements OnInit {

  constructor(
    private deviceService: DeviceService,
    private router: Router

  ) { }

  isLoggedAdmin: boolean = false;
  subscription: Subscription = new Subscription;
  isUpdating = false;
  updatingID: string = '';

  @ViewChild('deviceForm') deviceForm!: NgForm;
  @ViewChild('editForm') editForm!: NgForm;

  ngOnDestroy(): void {

    this.subscription!.unsubscribe();

  }

  ngOnInit(): void {
    this.checkLoggedUser();
    
  }

  loadDeviceData() {

    let deviceId: string = '';
    this.subscription = this.deviceService.getUpdatingId().subscribe((id: string) => {
      console.log('admin ' + id);
      this.updatingID = id;
      deviceId = id;
    });


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

    this.deviceService.updateDevice(deviceId, updatedDevice).subscribe((response) => {

      this.reloadCurrentRoute();

    })


  }
  checkLoggedUser() {

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user!);
    if (userObj.isAdmin == true) {
      this.isLoggedAdmin = true;
    }

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


      // this.notify.show(response as string, 'success');
      this.reloadCurrentRoute();

    }, (errors) => {

      // this.notify.show(errors, 'error');
    }
    );
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  abortUpdate() {
    this.isUpdating = false;
    this.updatingID = '';
  }


}
