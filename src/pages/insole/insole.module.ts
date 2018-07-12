import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsolePage } from './insole';

@NgModule({
  declarations: [
    InsolePage,
  ],
  imports: [
    IonicPageModule.forChild(InsolePage),
  ],
})
export class InsolePageModule {}
