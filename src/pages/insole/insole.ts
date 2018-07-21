import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { ProinfoPage } from '../proinfo/proinfo';
import { UnderproPage } from '../underpro/underpro';
import { analyzeAndValidateNgModules } from '../../../node_modules/@angular/compiler';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

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
  pageone = false;
  pagetwo = false;
  pagethree = false;
  selected = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, cameraPreview: CameraPreview) {
    this.Home = HomePage;
  }



  showAlert20() {
    const alert = this.alertCtrl.create({
    
      subTitle: 'Tap two buttons that has your shoe imprint on it',
      buttons: ['OK']
    });
    alert.present();
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

  ifButton(letter){
    let position = this.selected.indexOf(letter)
    if (position == -1){
      this.selected.push(letter);
    }else{
      this.selected.splice(position, 1);
    }
    console.log(this.selected)
    this.analyze();
  }

  analyze(){
    if (this.selected.indexOf('C') != -1 && this.selected.indexOf('B') != -1 && this.selected.length == 2){
      this.pageone = true;
      this.pagetwo = false;
      this.pagethree = false;
   
    }
    if(this.selected.indexOf('C') != -1 && this.selected.indexOf('A') != -1 && this.selected.length == 2){
      this.pageone = false;
      this.pagetwo = true;
      this.pagethree = false;
    }
    


    if(this.selected.indexOf('D') != -1 && this.selected.indexOf('A') != -1 && this.selected.length == 2){
      this.pageone = false;
      this.pagetwo = true;
      this.pagethree = false;
    
    } if(this.selected.indexOf('E') != -1 && this.selected.indexOf('A') != -1 && this.selected.length == 2){
          this.pageone = false;
          this.pagetwo = false;
          this.pagethree = true;
    }
    
         
      
    }
  }
