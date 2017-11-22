import { Component } from '@angular/core';
import { Platform, NavController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
//import { CreaterecipesPage }  from '../pages/createrecipes/createrecipes';
import { RecipesPage} from '../pages/recipes/recipes';
import { ViewChild } from '@angular/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild('content') content: NavController;
  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen,
    public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  showSignoutConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Alerte',
      message: 'Are you sure you want to disconnect ?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            confirm.dismiss();
          }
        },
        {
          text: 'Yes',
          handler: () => {
            localStorage.removeItem('user');
            location.reload();
          }
        }
      ]
    });
    confirm.present();
  }
}

