import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Testimonial {
  name: string;
  testimonial: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  constructor(private translate: TranslateService) {}

  testimonialDb: Testimonial[] = [
    {
      name: 'testimonials.t1.name',
      testimonial: 'testimonials.t1.text',
      status: 'testimonials.t1.status',
    },
    {
      name: 'testimonials.t2.name',
      testimonial: 'testimonials.t2.text',
      status: 'testimonials.t2.status',
    },
    {
      name: 'testimonials.t3.name',
      testimonial: 'testimonials.t3.text',
      status: 'testimonials.t3.status',
    }
  ];

  getTestimonials() {
    return this.testimonialDb;
  }
}
