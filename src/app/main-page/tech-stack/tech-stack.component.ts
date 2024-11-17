import { Component, Input } from '@angular/core';
import { SkillsService, Skill } from '../../services/skills/skills.service';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, TooltipComponent, TranslateModule],
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
  }

  onMouseLeave() {
    this.hover = false;
  }
}
