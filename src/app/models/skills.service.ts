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
    { name: 'HTML', src: 'assets/icons/skills/property-1-HTML.svg', alt: '' },
  ];

  getSkills(): Skill[] {
    return this.skillDb;
  }
}
