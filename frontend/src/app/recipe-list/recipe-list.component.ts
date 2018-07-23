import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { map, filter, scan } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { RecipeListService } from '../recipe-list.service';
import { SavedService } from '../saved.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeListService: RecipeListService, private savedService:SavedService, private http:HttpClient) { }

  ngOnInit() {
    this.recipeListService.subject
      .subscribe(res => this.recipes = res);
  }

  addFavorite(recipe) {
    this.savedService.add(recipe)
      .subscribe((x) => window.alert("Added to favorites!"))
  }
}
