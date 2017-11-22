import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { PreviewRecipePage } from '../preview-recipe/preview-recipe';

@IonicPage()
@Component({
  selector: 'page-diner',
  templateUrl: 'diner.html'
})
export class DinerPage {

  constructor(public navCtrl: NavController) {

  }

  previewRecipe(){
    if(localStorage['user']){
      this.navCtrl.push(PreviewRecipePage);
    }
    else {
      this.navCtrl.push(SignupPage);
    }
  }

}
