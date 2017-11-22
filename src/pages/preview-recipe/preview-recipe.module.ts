import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviewRecipePage } from './preview-recipe';

@NgModule({
  declarations: [
    PreviewRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(PreviewRecipePage),
  ],
})
export class PreviewRecipePageModule {}
