import {Component, OnInit} from '@angular/core';
import {PlayerService} from './player/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ColorGame';
  connect = false;
  name = '';

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.player$
      .subscribe(player => {
      if (player){
        this.connect = true;
        this.name = player.name;
      }});
  }
}
