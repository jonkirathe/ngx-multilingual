import { TestBed } from '@angular/core/testing';

import { NgxMultilingualService } from './ngx-multilingual.service';

describe('NgxMultilingualService', () => {
  let service: NgxMultilingualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMultilingualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
