
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';


import { InsolePage } from '../insole/insole';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the CameraPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-camera-preview',
  providers: [],
  templateUrl: 'camera-preview.html',
})
export class CameraPreviewPage {
  public base64Image: string;

  

  //public photos: any;

  myphoto: any;
  showInsole: any;
  imageURL;

  constructor(public platform: Platform, public cameraPreview: CameraPreview, public navCtrl: NavController, public dataProvider:DataProvider ) { 
    this.showInsole = false;
  
  }


  ionViewDidLoad() {
    console.log('load preview')
    this.platform.ready().then(() => {
      const cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: 'rear',
        tapPhoto: true,
        previewDrag: true,
        toBack: true,
        alpha: 1
      };

      this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log('camera on');
          console.log(res);
        },
        (err) => {
          console.log('camera error')
          console.log(err)
        });

    })
 }

  ionViewWillLeave() {
    console.log('leave')
    this.cameraPreview.stopCamera();
  }

  takePicture(){
    this.cameraPreview.takePicture().then((data)=>{
      this.imageURL = 'data:image/jpeg;base64,' + data;
      this.showInsole = true;

      this.dataProvider.addData(this.imageURL);
      this.navCtrl.push(InsolePage);
    })


  }

  loadP() {
    this.navCtrl.push(InsolePage);
  }



  
}


