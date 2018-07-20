import { TestBed, inject } from '@angular/core/testing';

import { RecipeDetailService } from './recipe-detail.service';

describe('RecipeDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeDetailService]
    });
  });

  it('should be created', inject([RecipeDetailService], (service: RecipeDetailService) => {
    expect(service).toBeTruthy();
  }));
});
