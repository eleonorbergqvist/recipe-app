import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SessionService } from './session.service';
import { Recipe } from './recipe';

// const API_HOST = 'http://recipeapp.test'
const API_HOST = 'http://elliesrecipeapp.chas.academy/service'

@Injectable({
  providedIn: 'root'
})

export class SavedService {

  subject = new BehaviorSubject<Recipe[]>([]);
  recipes : Recipe[] = [];


  constructor(private http: HttpClient, private sessionService: SessionService) {
  }

  getFavorites() {
    const token = this.sessionService.getToken();

    return this.http.get<any>(`${API_HOST}/api/favorites`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).pipe(
      map(res => res.data.favorites),
      map(res => res.map(x => x.data)),
      map(res => res.map(x => JSON.parse(x)),
    ))
  }

  add(recipe) {
    const token = this.sessionService.getToken();

    const body = {
      slug: recipe.id,
      data: JSON.stringify(recipe),
    }

    return this.http.post<any>(`${API_HOST}/api/favorites/create`, body, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

  }

  remove(recipe) {
    const token = this.sessionService.getToken();

    const body = {
      slug: recipe.id
    }

    return this.http.post<any>(`${API_HOST}/api/favorites/delete`, body, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }
}
