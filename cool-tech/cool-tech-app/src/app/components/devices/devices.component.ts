import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs';
import { Device, User } from 'src/app/models/models.js';
// import { Device } from '../../models/models';
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

  @ViewChild('deviceForm') deviceForm!: NgForm;

  constructor(
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.getAllDevices();
    this.checkLoggedUser()
  }
  checkLoggedUser() {

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user!);
    if (userObj.isAdmin == true) {
      this.isLoggedAdmin = true;
    }

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
    console.log(newDevice)

    this.deviceService.createDevice(newDevice).subscribe((response) => {


    }, (error) => {
      console.log('post device error: ' + error);
    }
    );

    //TODO update the state after creating
  }

}