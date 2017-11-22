import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SignupPage } from '../signup/signup';


@IonicPage()
@Component({
  selector: 'page-sweets',
  templateUrl: 'sweets.html'
})
export class SweetsPage {

  constructor(public navCtrl: NavController) {

  }
  previewRecipe() {
    if (localStorage['user']) {
      console.log("yo");
    }
    else {
      this.navCtrl.push(SignupPage);
    }
  }

}