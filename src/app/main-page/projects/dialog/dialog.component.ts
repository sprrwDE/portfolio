import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true
})
export class DialogComponent {
  @Output() close = new EventEmitter<void>(); 

  onClose() {
    this.close.emit(); 
  }
}
