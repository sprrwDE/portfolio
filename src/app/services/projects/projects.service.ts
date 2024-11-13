import { Injectable } from '@angular/core';

export interface Project {
  name: string;
  image: string;
  description: string;
  url: string;
  skillset: string[];
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
      description: 'lorem',
      url: 'https://join.kai-schulz.dev/',
      skillset: ['HTML', 'CSS', 'Javascript', 'Firebase']
    },
    {
      name: 'Kai der Hai',
      image: '',
      description: 'lorem',
      url: 'https://sharky.kai-schulz.dev/index.html',
      skillset: ['HTML', 'CSS', 'Javascript', 'Firebase']
    },
    {
      name: 'DABubble',
      image: '',
      description: 'lorem',
      url: '',
      skillset: ['HTML', 'CSS', 'Javascript', 'Firebase']
    }
  ]

  getProjects(): Project[] {
    return this.projects;
  }
}
