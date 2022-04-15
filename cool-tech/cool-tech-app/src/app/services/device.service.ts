import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { __values } from 'tslib';
import { Device } from '../models/models';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  private _updatingId = new BehaviorSubject<string>('');
  private _updatingId$ = this._updatingId.asObservable();

  private _isUpdatingId = new BehaviorSubject<boolean>(false);
  private _isUpdatingId$ = this._updatingId.asObservable();


  getUpdatingId(): Observable<string> {
    console.log('getter ID ' + this._updatingId$)
    return this._updatingId$;
  }

  setUpdatingId(latest: string) {
    console.log('setter ID' + latest)
    return this._updatingId.next(latest);
  }

  getIsUpdatingId(): Observable<string> {
    console.log('getter is Updating' + this._isUpdatingId$)
    return this._isUpdatingId$;
  }

  setIsUpdatingId(latest: boolean) {
    console.log('setter isUpdating ' + latest)
    return this._isUpdatingId.next(latest);
  }



  loadAllDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(
      `${apiUrl}/devices/all`
    );
  }

  createDevice(newDevice: Device) {

    const body = JSON.stringify(newDevice);

    return this.http.post(
      `${apiUrl}/devices/create`, body);

  }

  deleteDevice(deviceId: String) {

    return this.http.delete(

      `${apiUrl}/devices/delete/${deviceId}`);
  }

  getById(id: string) {

    return this.http.get(

      `${apiUrl}/devices/${id}`);
  }

  updateDevice(deviceId: string, newData: Device) {

    const body = JSON.stringify(newData);

    return this.http.post(
      `${apiUrl}/devices/update/${deviceId}`, body);
  }



}
