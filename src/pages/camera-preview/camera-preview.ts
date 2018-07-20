
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { Camera, CameraOptions, CameraPopoverOptions } from '@ionic-native/camera';

import { InsolePage } from '../insole/insole';
/**
 * Generated class for the CameraPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-camera-preview',
  providers: [Camera],
  templateUrl: 'camera-preview.html',
})
export class CameraPreviewPage {
  public photos: any;
  public base64Image: string;
  myphoto: any;

  imageURL
  constructor(public platform: Platform, public cameraPreview: CameraPreview, public navCtrl: NavController, private camera: Camera) { 
    
  
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
          console.log('camera on')
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



  loadP() {
    this.navCtrl.push(InsolePage);
  }
  takePhoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }


 



}
