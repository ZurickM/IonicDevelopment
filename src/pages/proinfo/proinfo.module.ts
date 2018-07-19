import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProinfoPage } from './proinfo';

@NgModule({
  declarations: [
    ProinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProinfoPage),
  ],
})
export class ProinfoPageModule {}
