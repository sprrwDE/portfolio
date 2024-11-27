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
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonialDb: Testimonial[] = [];
  selectedItem: number = 1;
  selectedPage: number = 1;
  animateRight: boolean = false;
  animateLeft: boolean = false;

  constructor(private testimonialService: TestimonialsService) {
    this.testimonialDb = this.testimonialService.getTestimonials();
    console.log(this.testimonialDb);
  }

  nextSlide() {
    this.selectNext();
    this.animateRight = true;
    // console.log(this.animateRight);
    setTimeout(() => {
      this.animateRight = false;
      // console.log(this.animateRight);
    }, 1000);
  }

  selectNext() {
    this.selectedPage = (this.selectedPage + 1) % this.testimonialDb.length;
    let lastElement = this.testimonialDb.pop();
    if (lastElement) {
      this.testimonialDb.unshift(lastElement);
    }
  }

  previousSlide() {
    this.selectPrev()
    this.animateLeft = true;
    // console.log(this.animateLeft);
    setTimeout(() => {
      this.animateLeft = false;
      // console.log(this.animateLeft);
    }, 1000);
  }

  selectPrev() {
    this.selectedPage = (this.selectedPage - 1 + this.testimonialDb.length) % this.testimonialDb.length;
    let firstElement = this.testimonialDb.shift();
    if (firstElement) {
      this.testimonialDb.push(firstElement);
    }
  }
}
