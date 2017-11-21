import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})
export class LoginPage {
  loginCredentials: {
    email: string,
    password: string
  } = {
    email: '',
    password: ''
  }
  constructor(public navCtrl: NavController) {

  }

  signIn() {
    this.navCtrl.push(HomePage);
  }
  goSignup(){
    this.navCtrl.push(SignupPage);
  }

}