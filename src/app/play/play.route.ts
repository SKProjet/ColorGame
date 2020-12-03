import {Routes} from '@angular/router';
import {BoxComponent} from './box/box.component';
import {StartComponent} from './start/start.component';


export const PLAY_ROUTES: Routes = [
  {path: 'start', component: StartComponent},
  {path: 'box', component: BoxComponent}
];
