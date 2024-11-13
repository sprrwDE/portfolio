import { Injectable } from '@angular/core';

export interface Testimonial {
  name: string,
  testimonial: string,
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor() { }

  testimonialDb:Testimonial[] = [{
    name: 'Mehmet Deliaci',
    testimonial: 'Lorem',
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
