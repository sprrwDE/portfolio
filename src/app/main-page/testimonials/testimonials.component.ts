import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestimonialsService, Testimonial } from '../../services/testimonials/testimonials.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonialDb:Testimonial[] = [];
  constructor(private testimonialService: TestimonialsService) {
    this.testimonialDb = this.testimonialService.getTestimonials()
    console.log(this.testimonialDb)
  }
}
