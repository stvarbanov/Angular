import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/models';
import { StorageService } from './storage.service';

export interface CreateUserDto { username: string, email: string, password: string, tel?: string }

@Injectable()
export class UserService {

  constructor(private storage: StorageService, private httpClient: HttpClient) {
    // console.log('UserService#constructor')
  }

  getProfile$(): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
  }
}

