import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { ProinfoPage } from '../proinfo/proinfo';
import { UnderproPage } from '../underpro/underpro';
import { CameraPreview } from '@ionic-native/camera-preview';
import { DataProvider } from '../../providers/data/data';

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
  pageone = false; //Overpronation Page//
  pagetwo = false; //Underpronation Page//
  pagethree = false; //Normal Pronation//
  selected = [];
  public foot;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, cameraPreview: CameraPreview, public dataProvider: DataProvider) {
    this.Home = HomePage;
  }



  showAlert20() {
    const alert = this.alertCtrl.create({
    
      subTitle: 'Tap two or three buttons that hover over your foot imprint',
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
    this.dataProvider.myData.subscribe((data) => {
      this.foot = data[0];
    })
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
    if(this.selected.indexOf('B') != -1 && this.selected.indexOf('A') != -1 && this.selected.indexOf('D') != -1 && this.selected.length == 3){
      this.pageone = false;
      this.pagetwo = true;
      this.pagethree = false;
}
if(this.selected.indexOf('B') != -1 && this.selected.indexOf('A') != -1 && this.selected.indexOf('C') != -1 && this.selected.length == 3){
  this.pageone = true;
  this.pagetwo = false;
  this.pagethree = false;
}
    
         
      
    }
  }
