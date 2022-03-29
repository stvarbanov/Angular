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

}
