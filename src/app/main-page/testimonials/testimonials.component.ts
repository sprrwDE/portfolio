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
  constructor(private testimonialService: TestimonialsService) {
    this.testimonialDb = this.testimonialService.getTestimonials();
    console.log(this.testimonialDb);
  }

  nextSlide() {
    let lastElement = this.testimonialDb.pop(); 
    if (lastElement) { 
      this.testimonialDb.unshift(lastElement); 
    }
  }

  previousSlide() {
    let firstElement = this.testimonialDb.shift(); 
    if(firstElement) {
      this.testimonialDb.push(firstElement);} 

  }
}
