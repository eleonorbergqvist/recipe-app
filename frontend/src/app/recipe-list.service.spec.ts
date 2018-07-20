import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { RecipeListService } from './recipe-list.service';

describe('RecipeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RecipeListService]
    });
  });

/*
  it('should be created', inject([RecipeListService], (service: RecipeListService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a search with requirePictures', inject([RecipeListService], (service: RecipeListService) => {
    expect(service.getSearch({}).requirePictures).toBeTruthy();
  }));
  */

  it('should have a search with query', inject([RecipeListService], (service: RecipeListService) => {
    const obj = service.getSearch({query: 'bobby'});

    expect(obj.q).toBeTruthy();
    expect(obj.q).toEqual('bobby');
    //expect(obj['allowedCourse[]']).toBeFalsy();
  }));

/*
  it('should have a search with appetizers', inject([RecipeListService], (service: RecipeListService) => {
    const obj = service.getSearch({appetizer: true});

    expect(obj['allowedCourse[]']).toBeTruthy();
  }));
  */
});
