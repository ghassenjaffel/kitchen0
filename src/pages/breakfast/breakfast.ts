import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { SignupPage } from '../signup/signup';

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
      console.log("yo");
    }
    else {
      this.navCtrl.push(SignupPage);
    }
  }

}