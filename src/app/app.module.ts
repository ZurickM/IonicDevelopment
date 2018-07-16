import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SecondPage } from '../pages/second/second';
import { CameraPage } from '../pages/camera/camera';
import { AccordionComponent } from '../components/accordion/accordion';
import { InsolePage } from '../pages/insole/insole';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SecondPage,
    AccordionComponent,
    CameraPage,
    InsolePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondPage,
    CameraPage,
    InsolePage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
