import { TestBed } from '@angular/core/testing';

import { ProductTsService } from './product.ts.service';

describe('ProductTsService', () => {
  let service: ProductTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
