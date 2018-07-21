import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { CameraPage } from '../pages/camera/camera';
import { SecondPage } from '../pages/second/second';
import { CameraPreview } from '../../node_modules/@ionic-native/camera-preview';
import { ShoeshowPage } from '../pages/shoeshow/shoeshow';
import { Camera } from '../../node_modules/@ionic-native/camera';
import { ProinfoPage } from '../pages/proinfo/proinfo';
import { InsolePage } from '../pages/insole/insole';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CameraPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

