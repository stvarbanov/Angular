import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from '../models/models';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  loadAllDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(
      `${apiUrl}/devices/all`
    );
  }

  createDevice(newDevice: any) {

    console.log(newDevice);
    return this.http.post(
      `${apiUrl}/devices/create`, { body: JSON.stringify(newDevice) }
    );

  }

  // addHero(newDevice: Device): Observable<Device> {
  //   return this.http.post<Device>(newDevice)
  //     .pipe(

  //     );
  // }







}
