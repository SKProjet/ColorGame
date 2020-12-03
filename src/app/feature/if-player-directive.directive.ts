import {Directive, HostBinding} from '@angular/core';
import {Player} from '../player/models/player';
import {PlayerService} from '../player/player.service';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appIfPlayerDirective]'
})
export class IfPlayerDirectiveDirective {

  @HostBinding('class') CSS = '';
  player: Player | null = null;
  private connect: boolean;

  constructor(private playerService: PlayerService) { }

  protected check(player: Player | boolean): void{
    // tslint:disable-next-line:no-shadowed-variable
    this.playerService.player$.subscribe(player => {
      if (!player){
        this.CSS = 'd-none';
      }});
  }
}
