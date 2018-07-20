import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RecipeSingle } from './recipe-single';

const APP_ID = '44cb4bb3';
const APP_KEY = 'c994042b361afc710ec2ee2c04a15ce8';
const API_HOST = 'http://api.yummly.com'

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailService {
  constructor(private http: HttpClient) {}

  getRecipe(recipeId) {
    return this.http.get<any>(`${API_HOST}/v1/api/recipe/${recipeId}`, {
      params: {
        _app_id: APP_ID,
        _app_key: APP_KEY,
     }
    })
      .pipe(
        map(res => res as RecipeSingle)
      )
  }
}
