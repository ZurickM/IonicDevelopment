import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageshoePage } from './pageshoe';

@NgModule({
  declarations: [
    PageshoePage,
  ],
  imports: [
    IonicPageModule.forChild(PageshoePage),
  ],
})
export class PageshoePageModule {}
