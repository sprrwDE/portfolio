import { Component } from '@angular/core';
import { SkillsService, Skill } from '../../services/skills/skills.service';
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
  hover: boolean = false;

  constructor(private skillsService: SkillsService) {
    this.skillDb = this.skillsService.getSkills();
  }

  onMouseOver() {
    this.hover = true;
    console.log(this.hover)
  }

  onMouseLeave() {
    this.hover = false;
    console.log(this.hover)
  }
}
