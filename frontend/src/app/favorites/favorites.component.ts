import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SavedService } from '../saved.service';
import { SessionService } from '../session.service';
import { Observable } from "rxjs";
import { Recipe } from '../recipe';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  recipes: Recipe[];

  constructor(private savedService: SavedService, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    if (!this.sessionService.getToken()) {
      this.router.navigate(['/']);
      return;
    }

    this.refresh();
  }

  refresh() {
    this.savedService.getFavorites().subscribe(res => this.recipes = res);
  }

  removeFavorite(recipe) {
    this.savedService.remove(recipe).subscribe((x) => this.refresh());
  }
}
