import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CreateRecipPage } from '../pages/createrecipes/createrecipes';
import { RecipesPage } from '../pages/recipes/recipes';
import { GlobalProvider } from '../providers/global/global';
import { NavigationProvider } from '../providers/navigation/navigation';
import { HttpModule } from '@angular/http';
import { SignupPage } from '../pages/signup/signup';
import { UserProvider } from '../providers/user/user';
import { PreviewRecipePage } from '../pages/preview-recipe/preview-recipe';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    RecipesPage,
    PreviewRecipePage,
    CreateRecipPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PreviewRecipePage,
    CreateRecipPage,
    SignupPage,
    RecipesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GlobalProvider,
    NavigationProvider,
    GlobalProvider,
    UserProvider
  ]
})
export class AppModule { }
