import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { HomePage } from '../home/home';
import { SecondPage } from '../second/second';





@NgModule({
    declarations: [
      HomePage,
      SecondPage,
      CameraPage,
    ],
    imports: [
      IonicPageModule.forChild(HomePage),
    ],
  })
  export class HomePageModule {}