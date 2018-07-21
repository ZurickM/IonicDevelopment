import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InsolePage } from '../insole/insole';
import { AngularCropperjsComponent } from '../../../node_modules/angular-cropperjs';
import { CameraPreviewPage } from '../camera-preview/camera-preview';


@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
  cropperOptions: any;
  croppedImage = null;

  myImage = null;
  scaleValX = 1;
  scalevalY = 1;
   
pushPage;
formPage;
InsolePage: any;
myphoto: any;
showInsole:any;
constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController, ) {

 

  
  this.pushPage = HomePage;
  this.formPage = HomePage;
  this.InsolePage= InsolePage;
  this.showInsole = true;
  
  this.cropperOptions = {
    dragMode: 'crop',
    aspectRatio: .5,
    autoCrop: true,
    movable: true,
    zoomable: true,
    scalable: true,
    autoCropArea: .8,
  };
  
  


  console.log(navParams.get('val'));

  }


  
  
  
  nextPage(){
    this.navCtrl.push(HomePage);
    }


    load3(){
      this.navCtrl.push(InsolePage);
      }

 


    





  // takePhoto(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  
  // this.camera.getPicture(options).then((imageData) => {
  //  // imageData is either a base64 encoded string or a file URI
  //  // If it's base64 (DATA_URL):
  //   this.myphoto = 'data:image/jpeg;base64,' + imageData;
  //   this.showInsole = true;
  // }, (err) => {
  //  // Handle error
  // });

  // }





  showAlert() {
    const alert = this.alertCtrl.create({
    
      subTitle: 'A removable sole worn in a shoe for warmth, as a deodorizer, or to improve the fit',
      buttons: ['OK']
    });
    alert.present();
  }
  

  showAlert2() {
    const alert = this.alertCtrl.create({
    
      subTitle: 'The insole is the inside part of the shoe that runs underneath and supports the buttom of the foot',
      buttons: ['OK']
    });
    alert.present();
  }



  showAlert3() {
    const alert = this.alertCtrl.create({
    
      subTitle: 'Pronation occurs as the foot rolls inwards and the arch of the foot flattens, hense the term often used to descrube someone who over pronates',
      buttons: ['OK']
    });
    alert.present();
  }





  //Image Cropping Stuff//



  captureImage() {

    this.navCtrl.push(CameraPreviewPage);
    // const options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE,
    //   sourceType: this.camera.PictureSourceType.CAMERA
    // }

    // this.camera.getPicture(options).then((imageData) => {
    //   this.myImage = 'data:image/jpeg;base64,' + imageData;
    // });
  }




    reset() {
      this.angularCropper.cropper.reset();
    }
   
    clear() {
      this.angularCropper.cropper.clear();
    }
   
    rotate() {
      this.angularCropper.cropper.rotate(90);
    }
  

    zoom(zoomIn: boolean) {
      let factor = zoomIn ? 0.1 : -0.1;
      this.angularCropper.cropper.zoom(factor);
    }
  
    
    scaleX() {
      this.scaleValX = this.scaleValX * -1;
      this.angularCropper.cropper.scaleX(this.scaleValX);
    }
   
    scaleY() {
      this.scalevalY = this.scalevalY * 1;
      this.angularCropper.cropper.scaleY(this.scaleY);
    }

    move(x, y) {
      this.angularCropper.cropper.move(x, y);
    }
   
    save() {
      let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
      this.croppedImage = croppedImgB64String;
    }
  }











