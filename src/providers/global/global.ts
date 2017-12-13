import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


@Injectable()
export class GlobalProvider {
  categories: [any] = [{
    name: "BreakFast",
    imageURL: "breakfast.jpg",
    itemsNumber: "20",
    pageURL: "BreakfastPage"
  },
  {
    name: "Diner",
    imageURL: "diner.jpg",
    itemsNumber: "64",
    pageURL: "DinerPage"
  },
  {
    name: "Sweets",
    imageURL: "sweets.jpg",
    itemsNumber: "20",
    pageURL: "SweetsPage"
  },
  {
    name: "Coffee",
    imageURL: "coffee.jpg",
    itemsNumber: "28",
    pageURL: "CoffeePage"
  }];

  breakfastRecipes: [any];
  dinerRecipes: [any];
  coffeeRecipes: [any];
  sweetRecipes: [any];
  constructor(public http: Http) {
    this.breakfastRecipes = JSON.parse(localStorage.getItem('breakfastList'));
    this.dinerRecipes = JSON.parse(localStorage.getItem('dinerList'));
    this.coffeeRecipes = JSON.parse(localStorage.getItem('coffeeList'));
    this.sweetRecipes = JSON.parse(localStorage.getItem('sweetList'));
  }

  getCategories() {
    return this.categories;
  }

  getBreakFastRecipes() {
    return this.breakfastRecipes;
  }
  getDinerRecipes() {
    return this.dinerRecipes;
  }
  getCoffeeRecipes() {
    return this.coffeeRecipes;
  }
  getSweetRecipes() {
    return this.sweetRecipes;
  }

  addRecipe(recipe, category) {
    switch (category) {
      case 'bf':
        this.breakfastRecipes.push(recipe);
        let __breakfastRecipesUpdate = JSON.stringify(this.breakfastRecipes);
        localStorage.setItem('breakfastList', __breakfastRecipesUpdate);
        break;

      case 'di':
        this.dinerRecipes.push(recipe);
        let __dinerUpdate = JSON.stringify(this.dinerRecipes);
        localStorage.setItem('dinerList', __dinerUpdate);
        break;

      case 'co':
        this.coffeeRecipes.push(recipe);
        let __coffeeRecipes = JSON.stringify(this.coffeeRecipes);
        localStorage.setItem('coffeeList', __coffeeRecipes);
        break;

      case 'sw':
        this.sweetRecipes.push(recipe);
        let __sweetRecipes = JSON.stringify(this.sweetRecipes);
        localStorage.setItem('sweetList', __sweetRecipes);
        break;

      default:
        break;
    }
  }
}
