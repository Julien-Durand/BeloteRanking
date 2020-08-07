import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {PlayersService} from './players.service';
import {Game} from '../models/belote.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeloteService {
  belotegame: Game[] = [];
  BeloteSubject = new Subject<Game[]>();

  constructor(private db: AngularFirestore,
              private player: PlayersService) { }

  emitBeloteGame(){
    this.BeloteSubject.next(this.belotegame);
  }
  /*Create id*/
  idGenerator(){
    return '' +  Math.random().toString(36).substr(2, 9);
  }

  /* Add game */
  addBelote(belotegame: Game, id: string) {
    const partie = {...belotegame};
    this.db.collection('CurrentGame').doc(id).set(partie);
  }
  createPartie(belotegame: Game, id: string){
    this.addBelote(belotegame, id);
    this.emitBeloteGame();
  }

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
      manche1_A: '0',
      manche1_B: '0',
      manche1_p: '',
      manche2_A: '0',
      manche2_B: '0',
      manche2_p: '',
      manche3_A: '0',
      manche3_B: '0',
      manche3_p: '',
      manche4_A: '0',
      manche4_B: '0',
      manche4_p: '',
      manche5_A: '0',
      manche5_B: '0',
      manche5_p: '',
      manche6_A: '0',
      manche6_B: '0',
      manche6_p: '',
      manche7_A: '0',
      manche7_B: '0',
      manche7_p: '',
      manche8_A: '0',
      manche8_B: '0',
      manche8_p: '',
      manche9_A: '0',
      manche9_B: '0',
      manche9_p: '',
      manche10_A: '0',
      manche10_B: '0',
      manche10_p: '',
      manche11_A: '0',
      manche11_B: '0',
      manche11_p: '',
      manche12_A: '0',
      manche12_B: '0',
      manche12_p: ''
    });
  }

  /* Read game information */
  getGame() {
    return this.db.collection('CurrentGame').snapshotChanges();
  }
  /* Return Player in current game*/
  getPlayerGame(id) {
    return this.db.doc('CurrentGame/' + id).snapshotChanges();
  }
  // getPlayer(id) {
  //   return this.player.getPlayer(id);
  // }

  /* Update data for current game */

  /* Delete current game */
  deleteCurrentGame() {
    this.db.collection('CurrentGame').doc().delete();
  }
}
