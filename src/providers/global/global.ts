import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GlobalProvider {
  categories: [any] = [{
    name: "BreakFast",
    imageURL: "breakfast.jpg",
    itemsNumber: "20",
    pageURL: ""
  },
  {
    name: "Dinner",
    imageURL: "diner.jpg",
    itemsNumber: "64",
    pageURL: ""
  },
  {
    name: "Sweets",
    imageURL: "sweets.jpg",
    itemsNumber: "20",
    pageURL: ""
  },
  {
    name: "Coffee",
    imageURL: "coffee.jpg",
    itemsNumber: "28",
    pageURL: ""
  }];
  constructor(public http: Http) {
    
  }

  getCategories(){
    return this.categories;
  };
}
