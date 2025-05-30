import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Shahi Paneer', 'Super tasty Shahi Paneer', 'https://th.bing.com/th/id/OIP.dMzBs8OW-kL_egS4R3G2zAHaLH?rs=1&pid=ImgDetMain',
            [
                new Ingredient('Paneer', 1),
                new Ingredient('Butter', 1),
            ]),
        new Recipe('Burger', 'What else you need to say?', 'https://th.bing.com/th/id/OIP.dMzBs8OW-kL_egS4R3G2zAHaLH?rs=1&pid=ImgDetMain',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Potato', 3),
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice())
    }

    getRecipes() {
        return this.recipes.slice(); // using slice method to retun a new array, instead of a reference to this array
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}