import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { LandingComponent } from './components/landing/landing.component';

import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { ProfileComponent } from './auth/profile/profile.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from './services/user.service';
import { StorageService } from './services/storage.service';
import { DevicesListComponent } from './components/devices/devices-list/devices-list.component';
import { DevicesAdminComponent } from './components/devices/devices-admin/devices-admin.component';



const routes: Routes = [
  { path: '', component: LandingComponent, data: { animation: 'routeAnimations' } },
  { path: 'browse-tech', component: DevicesComponent, },
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
      }
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
    ProfileComponent,
    LandingComponent,
    DevicesListComponent,
    DevicesAdminComponent
  ],
  imports: [
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (authService: AuthService) => {
    //     return () => authService.authenticate();
    //   },
    //   deps: [AuthService],
    //   multi: true
    // },
    UserService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
