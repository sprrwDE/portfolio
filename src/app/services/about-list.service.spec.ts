import { TestBed } from '@angular/core/testing';

import { AboutListService } from './about-list.service';

describe('AboutListService', () => {
  let service: AboutListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
