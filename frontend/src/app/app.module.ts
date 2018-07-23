import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecipeListService } from './recipe-list.service';
import { RecipeDetailService } from './recipe-detail.service';
import { SavedService } from './saved.service';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { SessionService } from './session.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { StartComponent } from './start/start.component'; // <-- NgModel lives here

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  {
    path: 'recipes',
    component: RecipesComponent,
    data: { title: 'Recipe Book' }
  },
  {
    path: '',
    component: StartComponent,
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
    NavigationComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
  ],
  providers: [
    RecipeListService,
    RecipeDetailService,
    SavedService,
    LoginService,
    SessionService,
    RegisterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
