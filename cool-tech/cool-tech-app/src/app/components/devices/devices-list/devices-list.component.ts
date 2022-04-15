import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css'],

  providers: [DeviceService],
  outputs: ['isUpdating', 'updatingId']
})
export class DevicesListComponent implements OnInit {

  constructor(private deviceService: DeviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllDevices();
  }

  @Input()
  isLoggedAdmin: boolean = false;


  devices: any = [];

  @Output() isUpdating = new EventEmitter<boolean>();
  @Output() updatingID = new EventEmitter<string>();

  getAllDevices() {
    this.deviceService.loadAllDevices().subscribe((data) => {
      this.devices.push(data);
    })
  }

  editDevice(deviceId: string) {

    this.isUpdating.emit(true);
    this.updatingID.emit(deviceId);

    console.log('from list ' + deviceId)

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
