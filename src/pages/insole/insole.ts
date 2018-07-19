import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { ProinfoPage } from '../proinfo/proinfo';
import { UnderproPage } from '../underpro/underpro';
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

  nextPage(){
    this.navCtrl.push(ProinfoPage);
    }

    nextPageP(){
      this.navCtrl.push(UnderproPage);
      }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InsolePage');
  }

}
