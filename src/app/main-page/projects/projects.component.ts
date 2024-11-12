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

  constructor(
    private projectService: ProjectsService,
  ) {
    this.projectDb = this.projectService.getProjects();
    console.log(this.projectDb);
  }

  isDialogOpen = false;

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

}
