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
  addFinalBelote(belotegame: any, id: string) {
    const partie = {...belotegame};
    this.db.collection('Parties').add(belotegame);
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
  updateManche(id, mancheN, scoreTeamA, scoreTeamB, preneur) {
    switch (mancheN) {
      case 1:
        return this.db.collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTeamA,
          scoreB: scoreTeamB,
          M1A: scoreTeamA,
          M1B: scoreTeamB,
          preneurM1: preneur
        });
        break;
      case 2:
        return this.db.collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTeamA,
          scoreB: scoreTeamB,
          M2A: scoreTeamA,
          M2B: scoreTeamB,
          preneurM2: preneur
        });
        break;
      case 3:
        return this.db.collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTeamA,
          scoreB: scoreTeamB,
          M3A: scoreTeamA,
          M3B: scoreTeamB,
          preneurM3: preneur
        });
        break;
      case 4:
        return this.db.collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTeamA,
          scoreB: scoreTeamB,
          M4A: scoreTeamA,
          M4B: scoreTeamB,
          preneurM4: preneur
        });
        break;
      case 5:
        return this.db.collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTeamA,
          scoreB: scoreTeamB,
          M5A: scoreTeamA,
          M5B: scoreTeamB,
          preneurM5: preneur
        });
        break;
      case 6:
        return this.db.collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTeamA,
          scoreB: scoreTeamB,
          M6A: scoreTeamA,
          M6B: scoreTeamB,
          preneurM6: preneur
        });
        break;
      case 7:
        return this.db.collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTeamA,
          scoreB: scoreTeamB,
          M7A: scoreTeamA,
          M7B: scoreTeamB,
          preneurM7: preneur
        });
        break;
      case 8:
        return this.db.collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTeamA,
          scoreB: scoreTeamB,
          M8A: scoreTeamA,
          M8B: scoreTeamB,
          preneurM8: preneur
        });
        break;
      case 9:
        return this.db.collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTeamA,
          scoreB: scoreTeamB,
          M9A: scoreTeamA,
          M9B: scoreTeamB,
          preneurM9: preneur
        });
        break;
      case 10:
        return this.db.collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTeamA,
          scoreB: scoreTeamB,
          M10A: scoreTeamA,
          M10B: scoreTeamB,
          preneurM10: preneur
        });
        break;
      case 11:
        return this.db.collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTeamA,
          scoreB: scoreTeamB,
          M11A: scoreTeamA,
          M11B: scoreTeamB,
          preneurM11: preneur
        });
        break;
      case 12:
        return this.db.collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTeamA,
          scoreB: scoreTeamB,
          M12A: scoreTeamA,
          M12B: scoreTeamB,
          preneurM12: preneur
        });
        break;
    }


    return this.db
      .collection('CurrentGame')
      .doc(id)
      .update({
        manche: mancheN,
        scoreA: scoreTeamA,
        scoreB: scoreTeamB,
        preneurM1: preneur
      });
  }

  /* Delete current game */
  deleteCurrentGame(id) {
    return this.db.collection('CurrentGame').doc(id).delete();
  }
}
