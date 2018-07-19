import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoeshowPage } from './shoeshow';

@NgModule({
  declarations: [
    ShoeshowPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoeshowPage),
  ],
})
export class ShoeshowPageModule {}
