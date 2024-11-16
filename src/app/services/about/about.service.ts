import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface ListItem {
  url: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(public translate: TranslateService) {}

  aboutItems: ListItem[] = [
    {
      url: 'assets/icons/highlights/location.svg',
      description: 'about.content.paragraph1',
    },
    {
      url: 'assets/icons/highlights/cognition.svg',
      description: 'about.content.paragraph2',
    },
    {
      url: 'assets/icons/highlights/check.svg',
      description: 'about.content.paragraph3',
    },
  ];

  getList(): ListItem[] {
    return this.aboutItems.map((item) => ({
      ...item,
      description: this.translate.instant(item.description),
    }));
  }
}
