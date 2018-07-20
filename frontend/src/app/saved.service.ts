import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from './recipe';


@Injectable({
  providedIn: 'root'
})

export class SavedService {

  subject = new BehaviorSubject<Recipe[]>([]);
  recipes : Recipe[] = [];


  constructor() {
    this.refresh();
  }

  add(recipe) {
    let recipes = this.recipes.filter((x) => x.id !== recipe.id);
    recipes = [recipe, ...this.recipes];

    this.save(recipes);
    this.refresh();
  }

  remove(recipe) {
    const recipes = this.recipes.filter((x) => x.id !== recipe.id);

    this.save(recipes);
    this.refresh();
  }

  private refresh() {
    this.recipes = this.load();
    this.subject.next(this.recipes);
  }

  private load() {
    let json = localStorage.getItem('favorites');
    if (!json) {
      return [];
    }

    return JSON.parse(json)
  }

  private save(recipes) {
    localStorage.setItem('favorites', JSON.stringify(recipes));
  }

  /*
  getFavorites(recipes) {

  return this.recipes
  .pipe(
      map(list => list as Recipe[])
    )
    .subscribe(res => this.subject.next(res));
  }
  */

}
