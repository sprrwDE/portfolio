import { Injectable } from '@angular/core';

export interface ProjectUrls {
  project: string;
  github: string;
}

export interface Skillset {
  name: string;
  image: string;
}

export interface Project {
  name: string;
  image: string;
  description: string;
  urls: ProjectUrls;
  skillset: Skillset[];
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
      skillset: [
        {
          name: 'HTML',
          image: '',
        },
        {
          name: 'CSS',
          image: '',
        },
        {
          name: 'Javascript',
          image: '',
        },
        {
          name: 'Firebase',
          image: '',
        },
      ],
    },
    {
      name: 'Kai der Hai',
      image: 'assets/images/sharky.png',
      description: 'lorem',
      urls: {
        project: 'https://sharky.kai-schulz.dev/',
        github: 'https://github.com/sprrwDE/sharkie',
      },
      skillset: [
        {
          name: 'HTML',
          image: '',
        },
        {
          name: 'CSS',
          image: '',
        },
        {
          name: 'Javascript',
          image: '',
        },
        {
          name: 'Firebase',
          image: '',
        },
      ],
    },
    {
      name: 'DABubble',
      image: '',
      description: 'lorem',
      urls: {
        project: '',
        github: '',
      },
      skillset: [
        {
          name: 'HTML',
          image: '',
        },
        {
          name: 'CSS',
          image: '',
        },
        {
          name: 'Javascript',
          image: '',
        },
        {
          name: 'Firebase',
          image: '',
        },
      ],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
