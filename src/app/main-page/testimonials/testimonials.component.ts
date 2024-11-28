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
  animateRight: boolean = false;
  animateLeft: boolean = false;

  constructor(private testimonialService: TestimonialsService) {
    this.testimonialDb = this.testimonialService.getTestimonials();
  }

  nextSlide() {
    this.animateRight = true;
    this.animateLeft = false;
    setTimeout(() => {
      this.animateRight = false;
      this.selectNext();
    }, 500); 
  }

  previousSlide() {
    this.animateLeft = true;
    this.animateRight = false;
    setTimeout(() => {
      this.animateLeft = false;
      this.selectPrev();
    }, 500); 
  }

  selectNext() {
    const lastElement = this.testimonialDb.pop();
    if (lastElement) {
      this.testimonialDb.unshift(lastElement);
    }
    this.selectedPage = (this.selectedPage + 1) % this.testimonialDb.length;
  }

  selectPrev() {
    const firstElement = this.testimonialDb.shift();
    if (firstElement) {
      this.testimonialDb.push(firstElement);
    }
    this.selectedPage =
      (this.selectedPage - 1 + this.testimonialDb.length) %
      this.testimonialDb.length;
  }
}
