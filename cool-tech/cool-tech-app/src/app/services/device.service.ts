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

  createDevice(newDevice: Device): Observable<Device> {

    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(newDevice);


    return this.http.post<Device>(
      `${apiUrl}/devices/create`, body, { 'headers': headers }
    );

  }

}
