import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InsolePage } from '../insole/insole';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

pushPage;
formPage;
InsolePage: any;
myphoto: any;
constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
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


  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
    this.myphoto = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });

  }


}


