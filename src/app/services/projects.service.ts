import { Injectable } from '@angular/core';

export interface Project {
  name: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects:Project[] = [
    {
      name: 'Join',
      image: '',
      description: 'lorem'
    },
    {
      name: 'Kai der Hai',
      image: '',
      description: 'lorem'
    },
    {
      name: 'DABubble',
      image: '',
      description: 'lorem'
    }
  ]

  getProjects(): Project[] {
    return this.projects;
  }
}
