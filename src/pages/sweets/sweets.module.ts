import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SweetsPage } from './sweets';

@NgModule({
  declarations: [
    SweetsPage,
  ],
  imports: [
    IonicPageModule.forChild(SweetsPage),
  ],
})
export class SweetsPageModule {}
