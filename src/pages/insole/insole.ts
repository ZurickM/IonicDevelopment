import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the InsolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insole',
  templateUrl: 'insole.html',
})
export class InsolePage {
Home;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Home = HomePage;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InsolePage');
  }

}
