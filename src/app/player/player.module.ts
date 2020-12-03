import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionComponent } from './connection/connection.component';
import { DiconnectComponent } from './diconnect/diconnect.component';
import {RouterModule} from '@angular/router';
import {PLAYER_ROUTES} from './player.route';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ConnectionComponent, DiconnectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PLAYER_ROUTES),
    ReactiveFormsModule
  ],
  exports: []
})
export class PlayerModule { }
