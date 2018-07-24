import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Camera} from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SecondPage } from '../pages/second/second';
import { CameraPage } from '../pages/camera/camera';
import { ProinfoPage } from '../pages/proinfo/proinfo';
import { ShoeshowPage } from '../pages/shoeshow/shoeshow';
import { UnderproPage } from '../pages/underpro/underpro';
import { PageshoePage } from '../pages/pageshoe/pageshoe';


import { AccordionComponent } from '../components/accordion/accordion';
import { InsolePage } from '../pages/insole/insole';
import { AngularCropperjsModule } from 'angular-cropperjs'
import { CameraPreviewPage } from '../pages/camera-preview/camera-preview';
import { CameraPreview } from '../../node_modules/@ionic-native/camera-preview';
import { DataProvider } from '../providers/data/data';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SecondPage,
    AccordionComponent,
    CameraPage,
    InsolePage,
    CameraPreviewPage,
    ProinfoPage,
    ShoeshowPage,
    UnderproPage,
    PageshoePage
    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularCropperjsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondPage,
    CameraPage,
    InsolePage,
    CameraPreviewPage,
    ProinfoPage,
    ShoeshowPage,
    UnderproPage,
    PageshoePage
    
    
  ],
  providers: [
    DataProvider,
    StatusBar,
    SplashScreen, Camera,
    CameraPreview, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
