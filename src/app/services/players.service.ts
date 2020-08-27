import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {


  constructor(private db: AngularFirestore,
              private authService: AuthService) { }
  /*Create id*/
  idGenerator(){
    return '' +  Math.random().toString(36).substr(2, 9);
  }

  /* Add Player */
  addPlayer(uid, name, idJoueur) {
    return this.db.collection('users').doc('' + uid).collection('Joueurs').doc('' + name).set({
      id: idJoueur,
      nom: name,
      MoyenPriseParPoint: '0',
      TotalPrise: '0',
      ManchesWin: '0',
      ManchesLose: '0',
      TauxReussite: '0',
      Win: '0',
      Lose: '0',
      RatioWin: '0',
      TauxPriseGame: '0',
      ELO: '0'
    });
  }
  /* Read */
   getPlayers(){
    const uidP = this.authService.getUserId();
    return this.db.collection('users').doc('' + uidP).collection('Joueurs').snapshotChanges();
  }

  /* Update */
  /* Delete player */


}
