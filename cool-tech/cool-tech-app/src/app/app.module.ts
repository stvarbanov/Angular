import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



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

import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { AdminModule } from './admin/admin.module';
import { ProfileComponent } from './auth/profile/profile.component';

import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './components/devices/details/details.component';


const routes: Routes = [
  {
    path: 'browse-tech', component: DevicesComponent, children: [
      {
        path: 'details/:id', component: DetailsComponent
      }
    ]
  },
  { path: 'our-services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'request-help', component: RequestComponent },
  {
    path: 'auth', children: [
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      //add admin route
      // {
      //   path: 'admin', component: RegisterComponent
      // },
    ]

  },


]
// TODO - move profile routing in routing module


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DevicesComponent,
    ServicesComponent,
    ProjectsComponent,
    RequestComponent,
    DetailsComponent
  ],
  imports: [
    AuthModule,
    AdminModule,

    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
   

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
