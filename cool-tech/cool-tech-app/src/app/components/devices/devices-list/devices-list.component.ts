import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css'],

  // outputs: ['isUpdating', 'updatingId']
})
export class DevicesListComponent implements OnInit {



  @Input()
  isLoggedAdmin: boolean = false;

  devices: any = [];

  isUpdating: boolean = false;
  updatingID: String = '';

  constructor(private deviceService: DeviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllDevices();
    this.isUpdating = false;
    this.updatingID = '';

  }

  getAllDevices() {
    this.deviceService.loadAllDevices().subscribe((data) => {
      this.devices.push(data);
    })
  }

  editDevice(deviceId: string) {

    // this.isUpdating = true;
    this.deviceService.setUpdatingId(deviceId);
    this.deviceService.setIsUpdatingId(true);

    this.deviceService.getIsUpdatingId().subscribe((response) =>
      this.isUpdating = response as unknown as boolean
    );
  }

  deleteDevice(deviceId: string) {

    this.deviceService.deleteDevice(deviceId).subscribe((data) => {

      this.reloadCurrentRoute();
      //list of requests should update
    })
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }




}
