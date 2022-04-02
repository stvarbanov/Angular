import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/models';
import { CreateUserDto } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser = new BehaviorSubject<User>(undefined!);

  currentUser$ = this._currentUser.asObservable();
  isLoggedIn$ = this.currentUser$.pipe(map(user => !!user));

  constructor(private httpClient: HttpClient) { }

  // login$(userData: { email: string, password: string }): Observable<User> {
  //   return this.httpClient
  //     .post(`${environment.apiUrl}/login`, userData, { withCredentials: true, observe: 'response' })
  //     .pipe(
  //       map(response => response.body)
  //     )

  // }

  login$(userData: { email: string, password: string }): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiUrl}/auth/login`, userData, { withCredentials: true })
    // .pipe(
    // map(response => response.body?)
    // )
  }

  logout$(): Observable<void> {
    return this.httpClient
      .post<void>(`${environment.apiUrl}/logout`, {}, { withCredentials: true })
  }

  register$(userData: CreateUserDto): Observable<any> {

    
    const body = JSON.stringify(userData);

    return this.httpClient.post(`${environment.apiUrl}/auth/register`, body, { withCredentials: true })
  }

  authenticate(): Observable<User> {
    return this.httpClient
      .get<User>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
      .pipe(tap(currentProfile => this.handleLogin(currentProfile)), catchError((err) => {
        return EMPTY;
      }))
  }

  handleLogin(newUser: User) {
    this._currentUser.next(newUser);
  }

  handleLogout() {
    this._currentUser.next(undefined!);
  }


}
