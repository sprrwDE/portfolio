import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestimonialsService, Testimonial } from '../../services/testimonials/testimonials.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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
