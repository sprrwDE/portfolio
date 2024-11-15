import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class SliderItemsService {
  sliderItems: string[] = [];

  constructor(private translate: TranslateService) {
    this.loadSliderItems();
  }

  private loadSliderItems() {
    this.translate.get('hero.slider').subscribe((items: string[]) => {
      this.sliderItems = items;
    });
  }
}