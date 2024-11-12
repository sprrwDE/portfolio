import { Component } from '@angular/core';
import {
  ProjectsService,
  Project,
} from '../../services/projects/projects.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
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
    public dialog: MatDialog
  ) {
    this.projectDb = this.projectService.getProjects();
    console.log(this.projectDb);
  }

  openDialog(project: Project) {
    this.dialog.open(DialogComponent, {
      data: {
        name: project.name,
        image: project.image,
        description: project.description,
        url: project.url,
        skillset: project.skillset,
      },
    });
  }
}
