import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  constructor(public navCtrl: NavController) {

  }

  signup() {
    this.navCtrl.push(HomePage);
  }

}