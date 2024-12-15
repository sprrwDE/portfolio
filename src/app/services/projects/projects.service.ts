import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  tag: string;
  image: string;
  description: string;
  urls: ProjectUrls;
  skillset: Skillset[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private translate: TranslateService) {}

  projects: Project[] = [
    {
      name: 'projects.join.name',
      tag: 'join',
      image: 'assets/images/join.jpeg',
      description: 'projects.join.description',
      urls: {
        project: 'https://join.kai-schulz.dev/',
        github: 'https://github.com/67Trane/join',
      },
      skillset: [
        {
          name: 'HTML',
          image: 'assets/icons/project-skillset/HTML.svg',
        },
        {
          name: 'CSS',
          image: 'assets/icons/project-skillset/CSS.svg',
        },
        {
          name: 'JavaScript',
          image: 'assets/icons/project-skillset/Javascript.svg',
        },
        {
          name: 'Firebase',
          image: 'assets/icons/project-skillset/Firebase.svg',
        },
      ],
    },
    {
      name: 'projects.sharky.name',
      tag: 'sharky',
      image: 'assets/images/sharky.jpeg',
      description: 'projects.sharky.description',
      urls: {
        project: 'https://sharky.kai-schulz.dev/',
        github: 'https://github.com/sprrwDE/sharkie',
      },
      skillset: [
        {
          name: 'HTML',
          image: 'assets/icons/project-skillset/HTML.svg',
        },
        {
          name: 'CSS',
          image: 'assets/icons/project-skillset/CSS.svg',
        },
        {
          name: 'JavaScript',
          image: 'assets/icons/project-skillset/Javascript.svg',
        }
      ],
    },
    {
      name: 'projects.bubble.name',
      tag: 'bubble',
      image: 'assets/images/pokedex.jpg',
      description: 'projects.bubble.description',
      urls: {
        project: 'https://pokedex.kai-schulz.dev/',
        github: 'https://github.com/sprrwDE/pokedex',
      },
      skillset: [
        {
          name: 'HTML',
          image: 'assets/icons/project-skillset/HTML.svg',
        },
        {
          name: 'CSS',
          image: 'assets/icons/project-skillset/CSS.svg',
        },
        {
          name: 'JavaScript',
          image: 'assets/icons/project-skillset/TypeScript.svg',
        }
      ],
    },
  ];

  getProjects(): Project[] {
    return this.projects.map((project) => ({
      ...project,
      description: this.translate.instant(project.description),
    }));
  }

}
