import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelectedCaught = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe(
      'Masala Tea',
      'Traditional Masala Tea',
      'https://paprika-sp.ru/__scale/uploads/s/n/6/7/n67s8xat3txl/img/autocrop/23a7fc85cd8708e76b65a49d5adc72ac.jpg?width=555&quality=85&webp=1'
    ),
    new Recipe(
      'Hachapuri',
      'Tasty delicious',
      'https://www.maggi.ru/data/images/recept/img640x500/recept_14545_el5k.jpg'
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedCaught.emit(recipe)
  }

}
