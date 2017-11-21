import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  assetsURL: string = "assets/img/";
  categories: [any];
  constructor(public navCtrl: NavController,
    public globalServ: GlobalProvider) {
    // get categories list
    this.categories = this.globalServ.getCategories();
  }

}
