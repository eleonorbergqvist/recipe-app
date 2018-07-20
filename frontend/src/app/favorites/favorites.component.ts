import { Component, OnInit } from '@angular/core';
import { SavedService } from '../saved.service';
import { Observable } from "rxjs";
import { Recipe } from '../recipe';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  recipes: Recipe[];

  constructor(private savedService: SavedService) {
    this.savedService = savedService;
  }

  ngOnInit() {
    this.savedService.subject.subscribe(res => this.recipes = res);
  }

  removeFavorite(recipe) {
    this.savedService.remove(recipe);
  }

}
