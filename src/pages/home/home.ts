import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  assetsURL: string = "assets/img/";
  categories: [any];
  constructor(public navCtrl: NavController,
    public globalServ: GlobalProvider,
    menu: MenuController) {
    // get categories list
    menu.enable(true);
    this.categories = this.globalServ.getCategories();
  }

}
