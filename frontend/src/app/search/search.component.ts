import { Component, OnInit } from '@angular/core';
import { Search } from './search.model';
import { RecipeListService } from '../recipe-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  model = new Search('', false, false, false, false, false, 0);

  constructor(private recipeListService: RecipeListService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.recipeListService.getRecipes(this.model)
  }

}
