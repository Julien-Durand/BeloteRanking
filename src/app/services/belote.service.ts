import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {PlayersService} from './players.service';
import {Game} from '../models/belote.model';
import {Subject} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BeloteService {
  belotegame: Game[] = [];
  BeloteSubject = new Subject<Game[]>();

  constructor(private db: AngularFirestore,
              private authService: AuthService) {
  }

  emitBeloteGame(){
    this.BeloteSubject.next(this.belotegame);
  }
    /* Add game */
  addBelote(belotegame: Game, id: string) {
    const partie = {...belotegame};
    const uid = this.authService.getUserId();
    this.db.collection('users').doc('' + uid).collection('CurrentGame').doc('' + id).set(partie);
    this.db.collection('users').doc('' + uid).collection('Games').doc('' + id).set(partie);
  }
  createPartie(belotegame: Game, id: string){
    this.addBelote(belotegame, id);
    this.emitBeloteGame();
  }

  /* Update data for current game */
  updateManche(id, mancheN, scoreTeamA, scoreTeamB, scoreTotalA, scoreTotalB, preneur) {
    const uid = this.authService.getUserId();
    switch (mancheN) {
      case 1:
        this.db.collection('users').doc('' + uid).collection('Games').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB,
          M1A: scoreTeamA,
          M1B: scoreTeamB,
          preneurM1: preneur
        });
        this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB
        });
        break;
      case 2:
        this.db.collection('users').doc('' + uid).collection('Games').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB,
          M2A: scoreTeamA,
          M2B: scoreTeamB,
          preneurM2: preneur
        });
        this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB
        });
        break;
      case 3:
        this.db.collection('users').doc('' + uid).collection('Games').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB,
          M3A: scoreTeamA,
          M3B: scoreTeamB,
          preneurM3: preneur
        });
        this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB
        });
        break;
      case 4:
        this.db.collection('users').doc('' + uid).collection('Games').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB,
          M4A: scoreTeamA,
          M4B: scoreTeamB,
          preneurM4: preneur
        });
        this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB
        });
        break;
      case 5:
        this.db.collection('users').doc('' + uid).collection('Games').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB,
          M5A: scoreTeamA,
          M5B: scoreTeamB,
          preneurM5: preneur
        });
        this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB
        });
        break;
      case 6:
        this.db.collection('users').doc('' + uid).collection('Games').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB,
          M6A: scoreTeamA,
          M6B: scoreTeamB,
          preneurM6: preneur
        });
        this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB
        });
        break;
      case 7:
        this.db.collection('users').doc('' + uid).collection('Games').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB,
          M7A: scoreTeamA,
          M7B: scoreTeamB,
          preneurM7: preneur
        });
        this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB
        });
        break;
      case 8:
        this.db.collection('users').doc('' + uid).collection('Games').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB,
          M8A: scoreTeamA,
          M8B: scoreTeamB,
          preneurM8: preneur
        });
        this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB
        });
        break;
      case 9:
        this.db.collection('users').doc('' + uid).collection('Games').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB,
          M9A: scoreTeamA,
          M9B: scoreTeamB,
          preneurM9: preneur
        });
        this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB
        });
        break;
      case 10:
        this.db.collection('users').doc('' + uid).collection('Games').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB,
          M10A: scoreTeamA,
          M10B: scoreTeamB,
          preneurM10: preneur
        });
        this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB
        });
        break;
      case 11:
        this.db.collection('users').doc('' + uid).collection('Games').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB,
          M11A: scoreTeamA,
          M11B: scoreTeamB,
          preneurM11: preneur
        });
        this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB
        });
        break;
      case 12:
        this.db.collection('users').doc('' + uid).collection('Games').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB,
          M12A: scoreTeamA,
          M12B: scoreTeamB,
          preneurM12: preneur
        });
        this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).update({
          manche: mancheN,
          scoreA: scoreTotalA,
          scoreB: scoreTotalB
        });
        break;
    }
  }

  /* Delete current game */
  deleteCurrentGame(id) {
    const uid = this.authService.getUserId();
    return this.db.collection('users').doc('' + uid).collection('CurrentGame').doc(id).delete();
  }
}
