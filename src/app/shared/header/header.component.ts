import { Component } from '@angular/core';
import { NgToggleModule } from 'ng-toggle-button';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLang: string = 'EN';

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
}
