import {Routes} from '@angular/router';
import {ConnectionComponent} from './connection/connection.component';
import {DiconnectComponent} from './diconnect/diconnect.component';

export const PLAYER_ROUTES: Routes = [
  {path: 'connection', component: ConnectionComponent},
  {path: 'disconnect', component: DiconnectComponent}
];
