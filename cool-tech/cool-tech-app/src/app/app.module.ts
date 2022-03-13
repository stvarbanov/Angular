import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/authconfig.interceptor.js';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { DevicesComponent } from './components/devices/devices.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RequestComponent } from './components/request/request.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert/alert.component';



const routes: Routes = [
  { path: 'browse-tech', component: DevicesComponent },
  { path: 'our-services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'request-help', component: RequestComponent },
  { path: 'auth/profile', component: ProfileComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
]
// TODO - move profile routing in AuthModule 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DevicesComponent,
    ServicesComponent,
    ProjectsComponent,
    RequestComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
