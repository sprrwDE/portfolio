import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  src: string;
  alt: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}

  skillDb: Skill[] = [
    { name: 'HTML', src: 'assets/icons/skills/Property-1-HTML.svg', alt: '' },
    { name: 'CSS', src: 'assets/icons/skills/Property-1-CSS.svg', alt: '' },
    { name: 'JavaScript', src: 'assets/icons/skills/Property-1-JavaScript.svg', alt: '' },
    { name: 'Material Design', src: 'assets/icons/skills/Property-1-MaterialDesign.svg', alt: '' },
    { name: 'TypeScript', src: 'assets/icons/skills/Property-1-TypeScript.svg', alt: '' },
    { name: 'Angular', src: 'assets/icons/skills/Property-1-Angular.svg', alt: '' },
    { name: 'Firebase', src: 'assets/icons/skills/Property-1-Firebase.svg', alt: '' },
    { name: 'GIT', src: 'assets/icons/skills/Property-1-Git.svg', alt: '' },
    { name: 'Rest-Api', src: 'assets/icons/skills/Property-1-Rest-Api.svg', alt: '' },
    { name: 'Scrum', src: 'assets/icons/skills/Property-1-Scrum.svg', alt: '' },
    { name: 'Growth Mindset', src: 'assets/icons/skills/Property-1-GrowthMindset.svg', alt: '' }
  ];

  getSkills(): Skill[] {
    return this.skillDb;
  }
}
