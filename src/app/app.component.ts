import { Component } from '@angular/core';
import { Platform, NavController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
//import { CreaterecipesPage }  from '../pages/createrecipes/createrecipes';
import { RecipesPage } from '../pages/recipes/recipes';
import { ViewChild } from '@angular/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  startBreakfastRecipes = [{
    name: "Nut Butter, Banana, and Chia Seed Toast",
    imageURL: "seed-toast.jpeg",
    author: "John toast",
    description: "Very good recipe",
    ingredients: ['Oeuf', 'Banane', 'Fraise']
  },
  {
    name: "Berry and Yogurt Smoothie",
    imageURL: "smoothie.jpg",
    author: "Patrick ghost",
    description: "Very good recipe",
    ingredients: ['Oeuf', 'Banane', 'Fraise']
  },
  {
    name: "Savory Oatmeal With an Egg",
    imageURL: "oatmeal.jpg",
    author: "Jessy James",
    description: "Very good recipe",
    ingredients: ['Oeuf', 'Banane', 'Fraise']
  },
  ];
  @ViewChild('content') content: NavController;
  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen,
    public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.registerCategories();
    });
  }

  registerCategories() {
    if (!localStorage['breakfastList']) {
      let __break = JSON.stringify(this.startBreakfastRecipes);
      localStorage.setItem('breakfastList', __break);

      let __diner = JSON.stringify(this.startBreakfastRecipes);
      localStorage.setItem('dinerList', __diner);

      let __coffee = JSON.stringify(this.startBreakfastRecipes);
      localStorage.setItem('coffeeList', __coffee);

      let __sweet = JSON.stringify(this.startBreakfastRecipes);
      localStorage.setItem('sweetList', __sweet);
    }
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

