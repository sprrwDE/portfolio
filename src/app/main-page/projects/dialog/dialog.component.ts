import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../services/projects/projects.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true
})
export class DialogComponent {
  @Input() project: Project | null = null; 
  @Output() close = new EventEmitter<void>(); 

  onClose() {
    this.close.emit(); 
  }
}
