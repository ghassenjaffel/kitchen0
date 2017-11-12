import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CoffeePage } from '../pages/coffee/coffee';
import { BreakfastPage} from '../pages/breakfast/breakfast';
import { DinerPage } from '../pages/diner/diner';
import { SweetsPage } from '../pages/sweets/sweets';
//import { CreaterecipesPage} from '../pages/createrecipes/createrecipes';
import { Sign_upPage } from '../pages/sign_up/sign_up';
import { RecipesPage} from '../pages/recipes/recipes';
import { GlobalProvider } from '../providers/global/global';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CoffeePage,
   // CreaterecipesPage,
    BreakfastPage,
    DinerPage,
    SweetsPage,
    Sign_upPage,
    RecipesPage
    
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CoffeePage,
   // CreaterecipesPage,
    BreakfastPage,
    DinerPage,
    SweetsPage,
    Sign_upPage,
    RecipesPage
    


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
