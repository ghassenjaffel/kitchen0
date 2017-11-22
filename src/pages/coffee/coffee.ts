import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

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
      console.log("yo");
    }
    else {
      this.navCtrl.push(SignupPage);
    }
  }

}