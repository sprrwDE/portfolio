import { Component } from '@angular/core';
import { NgToggleModule } from 'ng-toggle-button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
