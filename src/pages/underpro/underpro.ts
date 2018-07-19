import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PageshoePage} from '../pageshoe/pageshoe';

/**
 * Generated class for the UnderproPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-underpro',
  templateUrl: 'underpro.html',
})
export class UnderproPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnderproPage');
  }



  nextPageShoef(){
    this.navCtrl.push(PageshoePage);
    }

}
