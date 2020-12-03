import { Directive } from '@angular/core';
import {Player} from '../player/models/player';

@Directive({
  selector: '[appIfPlayerDirective]'
})
export class IfPlayerDirectiveDirective {

  constructor() { }

  protected check(player: Player | null): void {

  }

}
