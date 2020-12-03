import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlayerService} from '../player.service';
import {Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  error: any;
  formConnexion: FormGroup;
  authenticationFailed = false;

  constructor(private readonly fb: FormBuilder,
              private playerService: PlayerService,
              private router: Router) { }

    ngOnInit(): void {

    const {required, minLength, maxLength, email} =  Validators;

    this.formConnexion = this.fb.group({
      // for test
      login: ['john@doe', [email, minLength(8), required]],
      passe: ['abcde', [minLength(4), maxLength(8), required]],

      /* for prod
      * login: ['', [email, minLength(8), required]],
      passe: ['', [minLength(4), maxLength(8), required]],
      * */

    });
  }

  login(): void {
    this.playerService.connection(this.formConnexion.value).pipe(
      tap(() => this.router.navigate(['/'])),
      catchError((error) => {
        return this.authenticationFailed = error ;
      })).subscribe();
  }

}
