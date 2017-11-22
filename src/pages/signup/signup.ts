import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  userCredentials: {
    username: string,
    email: string,
    password: string,
    passwordRepeat: string
  } = {
      username: '',
      email: '',
      password: '',
      passwordRepeat: ''
    }
  constructor(public navCtrl: NavController, public userServ: UserProvider) {

  }

  signup() {
    if (this.userCredentials) {
      this.userServ.signup(this.userCredentials);
    }
    this.navCtrl.push(HomePage);
  }

}