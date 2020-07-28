import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {PlayersService} from './players.service';

@Injectable({
  providedIn: 'root'
})
export class BeloteService {

  constructor(private db: AngularFirestore,
              private player: PlayersService) { }

  /*Create id*/
  idGenerator(){
    return '' +  Math.random().toString(36).substr(2, 9);
  }

  /* Add game */
  addGame(idunique, date, p1, p2, p3, p4) {
    return this.db.collection('Parties').doc('' + idunique).set({
      id: idunique,
      dateGame: date,
      joueur1: p1,
      joueur2: p2,
      joueur3: p3,
      joueur4: p4,
      scoreTeamA: '0',
      scoreTeamB: '0',
      manches: '0',
      prise: ''
    });
  }
  /* Read game information */
  getGame() {
    return this.db.collection('Parties').snapshotChanges();
  }

  /* Update data for current game */
  /* Delete game */
}
