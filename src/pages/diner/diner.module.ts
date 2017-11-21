import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DinerPage } from './diner';

@NgModule({
  declarations: [
    DinerPage,
  ],
  imports: [
    IonicPageModule.forChild(DinerPage),
  ],
})
export class DinerPageModule {}
