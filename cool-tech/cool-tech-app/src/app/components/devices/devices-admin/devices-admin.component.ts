import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/models';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-devices-admin',
  templateUrl: './devices-admin.component.html',
  styleUrls: ['./devices-admin.component.css'],
  inputs: ['isUpdating', 'updatingId', 'isLoggedAdmin']
})
export class DevicesAdminComponent implements OnInit {

  constructor(
    private deviceService: DeviceService,
    private router: Router

  ) { }

  @ViewChild('deviceForm') deviceForm!: NgForm;
  @ViewChild('editForm') editForm!: NgForm;

  ngOnInit(): void {
    this.checkLoggedUser();
  }

  @Input() isLoggedAdmin: boolean = false;

  @Input() isUpdating = false;
  @Input() updatingID = '';

  OnChanges() {
    alert('admin upd ' + this.isUpdating)
    this.loadDeviceData(this.updatingID);

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

  loadDeviceData(deviceId: string) {
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

  //TODO this should receive event from list component
  adminUpdatesDevice(deviceId: string) {

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

  abortUpdate() {
    this.isUpdating = false;
    this.updatingID = '';
  }


}
