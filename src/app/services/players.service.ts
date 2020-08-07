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
  addPlayer(idunique, name) {
    return this.db.collection('Joueurs').doc('' + idunique).set({
      id: idunique,
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
  getPlayers() {
    return this.db.collection('Joueurs').snapshotChanges();
  }

  // getPlayer(idc) {
  //   return this.db.collection('Partie')
  //     .doc(idc)
  //     .snapshotChanges();
  // }

  /* Update */
  /* Delete player */


}
