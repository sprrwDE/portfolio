import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  TestimonialsService,
  Testimonial,
} from '../../services/testimonials/testimonials.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonialDb: Testimonial[] = [];
  selectedItem: number = 1;
  selectedPage: number = 1;

  constructor(private testimonialService: TestimonialsService) {
    this.testimonialDb = this.testimonialService.getTestimonials();
  }

selectNext() {
    const total = this.testimonialDb.length;
    if (this.selectedPage < total - 1) {
      this.selectedPage = this.selectedPage + 1
      this.selectedItem = this.selectedPage; 
    } else return

  }
  
  selectPrev() {
    const total = this.testimonialDb.length;
    if (this.selectedPage > 0) {
      this.selectedPage = this.selectedPage - 1
      this.selectedItem = this.selectedPage; 
    } else return
  } 
  
  get paginationDots() {
    const total = this.testimonialDb.length;
  
    const prev = (this.selectedPage - 1 + total) % total;
    const current = this.selectedPage;
    const next = (this.selectedPage + 1) % total;
  
    return [
      { index: prev, active: false },
      { index: current, active: true },
      { index: next, active: false },
    ];
  }
  
}
