import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FEATURE_ROUTES} from './feature.route';
import {LoaderComponent} from './loader/loader.component';
import {FieldComponent} from './field/field.component';
import { IfPlayerDirectiveDirective } from './if-player-directive.directive';
import { IfNoPlayerDirectiveDirective } from './if-no-player-directive.directive';


@NgModule({
  declarations: [
    LoaderComponent,
    FieldComponent,
    IfPlayerDirectiveDirective,
    IfNoPlayerDirectiveDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FEATURE_ROUTES)
  ],
  exports: [
    LoaderComponent,
    IfPlayerDirectiveDirective
  ]
})
export class FeatureModule { }
