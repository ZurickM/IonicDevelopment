import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestcamPage } from './testcam';

@NgModule({
  declarations: [
    TestcamPage,
  ],
  imports: [
    IonicPageModule.forChild(TestcamPage),
  ],
})
export class TestcamPageModule {}
