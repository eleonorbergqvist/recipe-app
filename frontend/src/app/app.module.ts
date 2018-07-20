import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecipeListService } from './recipe-list.service';
import { RecipeDetailService } from './recipe-detail.service';
import { SavedService } from './saved.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NavigationComponent } from './navigation/navigation.component'; // <-- NgModel lives here

const appRoutes: Routes = [
  { path: 'favorites', component: FavoritesComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  {
    path: '',
    component: RecipesComponent,
    data: { title: 'Recipe Book' }
  },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    SearchComponent,
    RecipeDetailComponent,
    FavoritesComponent,
    RecipesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
  ],
  providers: [RecipeListService, RecipeDetailService, SavedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
