
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Service } from '../models/models';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  createService(newService: Service) {
    const body = JSON.stringify(newService);

    return this.http.post(
      `${apiUrl}/service/create`, body);

  }

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(
      `${apiUrl}/service/all`
    );


  }

}

