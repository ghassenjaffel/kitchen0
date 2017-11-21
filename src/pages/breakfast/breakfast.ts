import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-breakfast',
  templateUrl: 'breakfast.html'
})
export class BreakfastPage {

  constructor(public navCtrl: NavController,
  public GlobalProvider: GlobalProvider) {
  }

}