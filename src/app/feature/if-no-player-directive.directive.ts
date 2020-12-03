import {Directive, HostBinding} from '@angular/core';
import {PlayerService} from '../player/player.service';
import {Player} from '../player/models/player';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appIfNoPlayerDirective]'
})
export class IfNoPlayerDirectiveDirective {


  @HostBinding('class') CSS = '';
  player: Player | null = null;
  private connect: boolean;

  constructor(private playerService: PlayerService) { }

  protected check(player: Player | boolean): void{
    // tslint:disable-next-line:no-shadowed-variable
    this.playerService.player$.subscribe(player => {
      if (player){
        this.CSS = 'd-none';
      }});
  }

}
