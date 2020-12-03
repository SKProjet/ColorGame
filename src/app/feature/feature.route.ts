import {Routes} from '@angular/router';
import {LoaderComponent} from './loader/loader.component';
import {FieldComponent} from './field/field.component';

export const FEATURE_ROUTES: Routes = [
  {path: 'field', component: FieldComponent},
  {path: 'loader', component: LoaderComponent}
];
