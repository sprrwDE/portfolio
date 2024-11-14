import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Testimonial {
  name: string,
  testimonial: string,
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(private translate: TranslateService) { }

  testimonialDb:Testimonial[] = [{
    name: 'Mehmet Deliaci',
    testimonial: 'testimonials.mehmet.text',
    status: 'Project Partner'
  },{
    name: 'Mehmet Deliaci',
    testimonial: 'Lorem',
    status: 'Project Partner'
  },{
    name: 'Mehmet Deliaci',
    testimonial: 'Lorem',
    status: 'Project Partner'
  }]

  getTestimonials() {
    return this.testimonialDb;
  }
}
