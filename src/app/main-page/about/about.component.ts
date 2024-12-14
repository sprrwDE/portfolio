import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutService, ListItem } from '../../services/about/about.service';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  aboutDb: ListItem[] = [];

  constructor(private aboutService: AboutService) {
    this.aboutDb = this.aboutService.getList();
    console.log(this.aboutDb);
  }

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
    AOS.refresh();
  }
}
