import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
  
import { DevicesComponent } from './components/devices/devices.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { RequestComponent } from './request/request.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  { path: 'browse-tech', component: DevicesComponent },
  { path: 'our-services',component: ServicesComponent },
  { path: 'projects',component: ProjectsComponent },
  { path: 'request-help',component: RequestComponent },
  { path: 'auth/profile',component: ProfileComponent },
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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
