import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { PreviewRecipePage } from '../preview-recipe/preview-recipe';

@IonicPage()
@Component({
  selector: 'page-coffee',
  templateUrl: 'coffee.html'
})
export class CoffeePage {

  constructor(public navCtrl: NavController) {

  }

  previewRecipe() {
    if (localStorage['user']) {
      this.navCtrl.push(PreviewRecipePage);
    }
    else {
      this.navCtrl.push(SignupPage);
    }
  }

}