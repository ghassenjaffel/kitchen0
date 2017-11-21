import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})
export class LoginPage {
  loginCredentials: {
    username: string,
    password: string
  } = {
      username: '',
      password: ''
    }
  constructor(public navCtrl: NavController, public userServ: UserProvider) {

  }

  signIn() {
    // this.userServ.login();
    this.navCtrl.setRoot(HomePage);
  }
  goSignup() {
    this.navCtrl.push(SignupPage);
  }

}