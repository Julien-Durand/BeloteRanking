import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

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
    console.log(this.user);

  }
  btnAddPlayer() {
    this.router.navigate(['BeloteRanking/Joueur']);
  }
  btnBelote() {
    this.router.navigate(['BeloteRanking/Belote']);
  }
  bntScores() {
    this.router.navigate(['BeloteRanking/Scores']);
  }

}
