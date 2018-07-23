import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login';

// const API_HOST = 'http://recipeapp.test'
const API_HOST = 'http://elliesrecipeapp.chas.academy/service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(model) {
    return this.http.post<any>(`${API_HOST}/api/login`, {
      email: model.email,
      password: model.password
    }, {})
  }
}
