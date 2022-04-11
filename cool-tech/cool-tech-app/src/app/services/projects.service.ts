import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/models.js';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})


export class ProjectsService {

  constructor(private http: HttpClient) { }

  createProject(newProject: Project) {
    const body = JSON.stringify(newProject);

    return this.http.post(
      `${apiUrl}/project/create`, body);

  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(
      `${apiUrl}/project/all`
    );

  }

  deleteProject(projectId: string) {


    return this.http.delete(

      `${apiUrl}/project/delete/${projectId}`);
  }

  getById(id: string) {

    return this.http.get(

      `${apiUrl}/project/${id}`);
  }

  updateProject(projecId: string, newData: Project) {

    const body = JSON.stringify(newData);

    return this.http.post(
      `${apiUrl}/project/update/${projecId}`, body);
  }

  
}
