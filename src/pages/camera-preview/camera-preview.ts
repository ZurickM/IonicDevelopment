
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

import { InsolePage } from '../insole/insole';
/**
 * Generated class for the CameraPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-camera-preview',
  templateUrl: 'camera-preview.html',
})
export class CameraPreviewPage {

  constructor(public platform: Platform, public cameraPreview: CameraPreview, public navCtrl: NavController) { }


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
          console.log('camera on')
        },
        (err) => {
          console.log('camera error')
          console.log(err)
        });

    })
  }

  ionViewWillLeave(){
    console.log('leave')
    this.cameraPreview.stopCamera();
  }



  loadP(){
    this.navCtrl.push(InsolePage);
    }




}
