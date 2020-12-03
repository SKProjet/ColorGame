import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FEATURE_ROUTES} from './feature.route';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(FEATURE_ROUTES)
  ],
  exports: []
})
export class FeatureModule { }
