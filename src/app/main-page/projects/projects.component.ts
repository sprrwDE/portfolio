import { Component } from '@angular/core';
import {
  ProjectsService,
  Project,
} from '../../services/projects/projects.service';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, DialogComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectDb: Project[] = [];
  currentProject: Project | null = null;
  isDialogOpen = false;
  currentIndex: number = 0;

  constructor(
    private projectService: ProjectsService,
  ) {
    this.projectDb = this.projectService.getProjects();
  }

  openDialog(index: number) { 
    this.currentProject = this.projectDb[index]; 
    this.isDialogOpen = true;
    this.currentIndex = index;
  }

  closeDialog() {
    this.currentProject = null; 
    this.isDialogOpen = false;
  }

}
