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
  @Input() projectDb: Project[] = []; 
  @Input() currentIndex: number = 0; 
  @Output() close = new EventEmitter<void>();
  @Output() updateIndex = new EventEmitter<number>(); 

  onClose() {
    this.close.emit();
  }

  nextDialog() {
    if (this.currentIndex < this.projectDb.length - 1) {
      this.currentIndex++;
      this.updateIndex.emit(this.currentIndex); 
      this.project = this.projectDb[this.currentIndex]; 
    }
  }
}
