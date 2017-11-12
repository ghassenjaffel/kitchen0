import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-breakfast',
  templateUrl: 'breakfast.html'
})
export class BreakfastPage {

  constructor(public navCtrl: NavController,
  public GlobalProvider: GlobalProvider) {
  }

}