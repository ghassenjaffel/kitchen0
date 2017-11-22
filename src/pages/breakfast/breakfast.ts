import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { SignupPage } from '../signup/signup';
import { PreviewRecipePage } from '../preview-recipe/preview-recipe';
import { CreateRecipPage } from '../createrecipes/createrecipes';

@IonicPage()
@Component({
  selector: 'page-breakfast',
  templateUrl: 'breakfast.html'
})
export class BreakfastPage {

  constructor(public navCtrl: NavController,
    public GlobalProvider: GlobalProvider) {
  }

  previewRecipe() {
    if (localStorage['user']) {
      this.navCtrl.push(PreviewRecipePage);
    }
    else {
      this.navCtrl.push(SignupPage);
    }
  }

  addRecipe() {
    if (localStorage['user']) {
      this.navCtrl.push(CreateRecipPage);
    }
    else {
      this.navCtrl.push(SignupPage);
    }
  }

}