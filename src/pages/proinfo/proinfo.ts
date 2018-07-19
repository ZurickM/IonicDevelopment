import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoeshowPage } from '../shoeshow/shoeshow';
/**
 * Generated class for the ProinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proinfo',
  templateUrl: 'proinfo.html',
})
export class ProinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProinfoPage');
  }

 
  nextPageShoe(){
    this.navCtrl.push(ShoeshowPage);
    }


}
