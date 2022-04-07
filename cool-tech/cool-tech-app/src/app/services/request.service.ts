import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestI } from '../models/models.js';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RequestService {



  constructor(private http: HttpClient) { }


  loadAllRequests(): Observable<RequestI[]> {
    return this.http.get<RequestI[]>(
      `${apiUrl}/request/all`
    );
  }

  createRequest(newRequest: RequestI) {

    const body = JSON.stringify(newRequest);

    return this.http.post(
      `${apiUrl}/request/create`, body);

  }

  deleteRequest(requestId: string) {

    // const body = JSON.stringify();

    return this.http.delete(

      `${apiUrl}/request/delete/{requestId}`);
  }

}
