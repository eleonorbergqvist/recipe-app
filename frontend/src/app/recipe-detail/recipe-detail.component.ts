import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { SavedService } from '../saved.service';
import { RecipeDetailService } from '../recipe-detail.service';
import { RecipeSingle } from '../recipe-single';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: RecipeSingle;

  constructor(private route:ActivatedRoute, private recipeDetailService:RecipeDetailService, private savedService:SavedService, private http:HttpClient) {
    this.recipeDetailService = recipeDetailService;
    this.savedService = savedService;
    this.route = route;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const recipeId = params['id'];

      this.getRecipe(recipeId);
    });
  }

  getRecipe(recipeId) {
    this.recipeDetailService.getRecipe(recipeId)
      .subscribe((recipe) => {
        console.log(recipe);
         console.log(recipe.images[0].hostedLargeUrl);
        this.recipe = recipe;
      });
  }
}
