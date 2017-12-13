import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { SignupPage } from '../signup/signup';
import { PreviewRecipePage } from '../preview-recipe/preview-recipe';
import { CreateRecipPage } from '../createrecipes/createrecipes';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-breakfast',
  templateUrl: 'breakfast.html'
})
export class BreakfastPage {
  assetsURL: string = "assets/img/recipes/breakfast/";
  recipes: [any];
  constructor(public navCtrl: NavController,
    public globalProvider: GlobalProvider) {
    this.recipes = this.globalProvider.getBreakFastRecipes();
  }

  ionViewDidLoad() {
    console.log(this.recipes, 'fucking recieeeeeeeeeeeeeeeeeeees')
    this.recipes = this.globalProvider.getBreakFastRecipes();
  }


  previewRecipe() {
    if (localStorage['user']) {
      this.navCtrl.push(PreviewRecipePage);
    }
    else {
      this.navCtrl.push(LoginPage);
    }
  }

  addRecipe() {
    if (localStorage['user']) {
      this.navCtrl.push(CreateRecipPage);
    }
    else {
      this.navCtrl.push(LoginPage);
    }
  }

}