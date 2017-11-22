import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  constructor(public http: Http) {
    
  }
  
  signup(userCred){
    localStorage['user'] = JSON.stringify(userCred);
  }

  login(){
    console.log("logged in !");
  }
}
