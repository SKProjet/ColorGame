import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FEATURE_ROUTES} from './feature.route';
import {LoaderComponent} from './loader/loader.component';
import {FieldComponent} from './field/field.component';


@NgModule({
  declarations: [
    LoaderComponent,
    FieldComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FEATURE_ROUTES)
  ],
  exports: [
    LoaderComponent
  ]
})
export class FeatureModule { }
