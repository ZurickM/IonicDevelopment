import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';
import { HomePage } from '../home/home';
import { SecondPage } from '../second/second';


@NgModule({
  declarations: [
    CameraPage,
    HomePage,
    SecondPage
    
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class CameraPageModule {}





