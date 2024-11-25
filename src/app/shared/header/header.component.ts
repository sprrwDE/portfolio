import { Component } from '@angular/core';
import { NgToggleModule } from 'ng-toggle-button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgToggleModule, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLang: string = 'EN';
  hamburgerOpen: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); 
  }

  toggleLanguage(value: number) {
    if (value === 1) {
      this.translate.use('en');
      this.currentLang = 'EN';
    } else {
      this.translate.use('de');
      this.currentLang = 'DE';
    }
  }

  openHamburger() {
    this.hamburgerOpen = true;
  }

  closeHamburger() {
    this.hamburgerOpen = false;
  }
}
