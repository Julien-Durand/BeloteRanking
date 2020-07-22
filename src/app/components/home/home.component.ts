import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'BR-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(private authService: AuthService,
              private router: Router){ }

  ngOnInit(): void {
    this.user = this.authService.user;
  }

  btnAddPlayer() {
    this.router.navigate(['Joueur']);
  }

}
