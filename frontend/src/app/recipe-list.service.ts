import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from './recipe';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Search } from './search/search.model';

const APP_ID = '44cb4bb3';
const APP_KEY = 'c994042b361afc710ec2ee2c04a15ce8';
const API_HOST = 'http://api.yummly.com'

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {
  subject = new BehaviorSubject<Recipe[]>([]);

  constructor(private http: HttpClient) {}

  getSearchParams(model) {
    let params = {};

    if (model.query) {
      params = {...params, q: model.query}
    }

    if (model.time) {
      params = {...params, maxTotalTimeInSeconds: model.time}
    }

    let allowedCourse = [];

    if (model.appetizer) {
      allowedCourse = [...allowedCourse, 'course^course-Appetizers']
    }

    if (model.dessert) {
      allowedCourse = [...allowedCourse, 'course^course-Desserts']
    }

    if (model.main) {
      allowedCourse = [...allowedCourse, 'course^course-Main dishes']
    }

    let allowedAllergy = [];

    if (model.glutenfree) {
      allowedAllergy = [...allowedAllergy, '393^Gluten-Free']
    }

    if (model.nutfree) {
      allowedAllergy = [...allowedAllergy, '394^Peanut-Free']
    }

    return {
      ...params,
      requirePictures: 'true',
      'allowedDiet[]': ['386^Vegan'],
      'allowedCourse[]': allowedCourse,
      'allowedAllergy[]': allowedAllergy,
    }
  }

  getRecipes(model) {
    const searchParams = this.getSearchParams(model);

    return this.http.get<any>(`${API_HOST}/v1/api/recipes`, {
      params: {
        ...searchParams,
        _app_id: APP_ID,
        _app_key: APP_KEY,
     }
    })
      .pipe(
        map(res => res.matches),
        map(list => list as Recipe[])
      )
      .subscribe(res => this.subject.next(res));
  }
}
