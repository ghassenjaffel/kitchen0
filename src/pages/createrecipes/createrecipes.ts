import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { BreakfastPage } from '../breakfast/breakfast';

@Component({
  selector: 'page-createrecipes',
  templateUrl: 'createrecipes.html'
})
export class CreateRecipPage {
  recipe: {
    name: String,
    imageURL: String,
    author: String,
    description: String,
    ingredients: String[]
  } = {
      name: '',
      imageURL: 'seed-toast.jpeg',
      author: '',
      description: '',
      ingredients: []
    };
  recipeCategory: String = '';
  newIngredient: String = '';
  user: any;
  constructor(public globalProv: GlobalProvider, public navCtrl: NavController) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  addRecipe() {
    this.recipe.author = this.user.username;
    this.globalProv.addRecipe(this.recipe, this.recipeCategory);
    this.navCtrl.push(BreakfastPage);
  }

  addIngredient() {
    this.recipe.ingredients.push(this.newIngredient);
    this.newIngredient = '';
  }

  removeIng(index) {
    this.recipe.ingredients.splice(index, 1);
  }
}


