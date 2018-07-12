import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InsolePage } from '../insole/insole';


@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

pushPage;
formPage;
InsolePage: any;
constructor(public navCtrl: NavController, public navParams: NavParams) {
this.pushPage = HomePage;
this.formPage = HomePage;
this.InsolePage= InsolePage;
    

console.log(navParams.get('val'));

  }

  nextPage(){
    this.navCtrl.push(HomePage);
    }


    load3(){
      this.navCtrl.push(HomePage);
      }


     


}


