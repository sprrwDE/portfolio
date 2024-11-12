import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'] // "styleUrls" statt "styleUrl"
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any // nur `data`, keine zusätzliche Abhängigkeit
  ) {}
}