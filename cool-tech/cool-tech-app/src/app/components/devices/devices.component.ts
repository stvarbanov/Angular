import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @ViewChild('deviceForm') deviceForm!: NgForm;

  constructor(
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.getAllDevices();
    console.log(this.devices)
  }

  getAllDevices() {
    this.deviceService.loadAllDevices().subscribe((data) => {
      
      this.devices.push(data);

    })
  }
  ngAfterViewInit(): void {


  }

  onSubmit() {
    alert(JSON.stringify(this.deviceForm.value));

  }

}
