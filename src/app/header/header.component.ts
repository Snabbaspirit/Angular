import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  @Output() navToRecipes = new EventEmitter<string>()
  navToShoppingList = new EventEmitter()

  onSelect(feature: string) {
    this.navToRecipes.emit(feature);
  }

}