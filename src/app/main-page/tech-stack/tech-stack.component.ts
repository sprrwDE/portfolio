import { Component } from '@angular/core';
import { SkillsService, Skill } from '../../models/skills.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  skillDb: Skill[] = [];

  constructor(private skillsService: SkillsService) {
    this.skillDb = this.skillsService.getSkills();
    console.log(this.skillDb);
  }
}
