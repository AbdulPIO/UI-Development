import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://th.bing.com/th/id/OIP.dMzBs8OW-kL_egS4R3G2zAHaLH?rs=1&pid=ImgDetMain'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://th.bing.com/th/id/OIP.dMzBs8OW-kL_egS4R3G2zAHaLH?rs=1&pid=ImgDetMain')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
