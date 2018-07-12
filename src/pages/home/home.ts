import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { CameraPage } from '../camera/camera';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
nextPage(){
  this.navCtrl.push(SecondPage);
  }

  load(){
    this.navCtrl.push(CameraPage);
    }

  }

