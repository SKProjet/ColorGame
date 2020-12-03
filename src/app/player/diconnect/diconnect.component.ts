import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PlayerService} from '../player.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-diconnect',
  templateUrl: './diconnect.component.html',
  styleUrls: ['./diconnect.component.css']
})
export class DiconnectComponent implements OnInit {

  constructor(private playerService: PlayerService,
              private router: Router) { }

  ngOnInit(): void {}

  logout(): void {
    this.playerService.disconnect()
      .pipe(tap(this.cancel.bind(this))).subscribe();
  }

  cancel(): void {
    this.router.navigateByUrl('/');
  }
}
