import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from './register';

// const API_HOST = 'http://recipeapp.test'
const API_HOST = 'http://elliesrecipeapp.chas.academy/service'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(model) {
    return this.http.post<any>(`${API_HOST}/api/register`, {
      name: model.name,
      email: model.email,
      password: model.password
    }, {});
  }
}
