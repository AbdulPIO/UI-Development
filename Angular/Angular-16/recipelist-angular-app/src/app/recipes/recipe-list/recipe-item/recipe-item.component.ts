import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; // binding this property from outside using @Input from recipe-list.component.html
  // @Output() recipeSelected = new EventEmitter<void>();

  @Input() index: number;

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
