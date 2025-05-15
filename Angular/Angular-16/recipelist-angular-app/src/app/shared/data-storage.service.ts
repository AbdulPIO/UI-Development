import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.post('api/api/fb262340c4fa40799229468d45f80f6b/recipes',
            recipes
        )
            .subscribe(response => {
                console.log(response);
            })
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('api/api/fb262340c4fa40799229468d45f80f6b/recipes'
        )
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                });
            }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            )
    }
}