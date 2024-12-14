import { Component, OnInit } from '@angular/core';
import { SkillsService, Skill } from '../../services/skills/skills.service';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

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

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
    AOS.refresh();
  }

  onMouseOver() {
    this.hover = true;
  }

  onMouseLeave() {
    this.hover = false;
  }
}
