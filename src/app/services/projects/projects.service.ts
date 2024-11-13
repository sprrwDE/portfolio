import { Injectable } from '@angular/core';

export interface ProjectUrls {
  project: string;
  github: string;
}

export interface Project {
  name: string;
  image: string;
  description: string;
  urls: ProjectUrls;
  skillset: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  projects: Project[] = [
    {
      name: 'Join',
      image: '',
      description: 'lorem',
      urls: {
        project: 'https://join.kai-schulz.dev/',
        github: '',
      },
      skillset: ['HTML', 'CSS', 'Javascript', 'Firebase'],
    },
    {
      name: 'Kai der Hai',
      image: '',
      description: 'lorem',
      urls: {
        project: 'https://sharky.kai-schulz.dev/',
        github: 'https://github.com/sprrwDE/sharkie',
      },
      skillset: ['HTML', 'CSS', 'Javascript', 'Firebase'],
    },
    {
      name: 'DABubble',
      image: '',
      description: 'lorem',
      urls: {
        project: '',
        github: '',
      },
      skillset: ['HTML', 'CSS', 'Javascript', 'Firebase'],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
