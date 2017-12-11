import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { observable, Observable } from '../../../www/build/vendor';


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
  constructor(public http: Http) {
    
  }

  getCategories(): Observable<any> {
    return this.http.get('http://localhost:3000/categories');
  };

  getRecipes(): Observable<any> {
    return this.http.get('http://localhost:3000/recipes');
  };

  addRecipes(recipe): Observable<any> {
    return this.http.post('http://localhost:3000/recipes', recipe);
  };
}
