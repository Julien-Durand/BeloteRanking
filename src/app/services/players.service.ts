import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {Joueur} from '../models/joueur.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  player: Joueur[] = [];
  playersSubject = new Subject<Joueur[]>();

  constructor(private db: AngularFirestore,
              private authService: AuthService) { }

  idGenerator(){
    return '' +  Math.random().toString(36).substr(2, 9);
  }

  emitPlayer() {
    this.playersSubject.next(this.player);
  }

  create_joueur(player: Joueur) {
    const joueur = {...player};
    const id = this.idGenerator();
    this.db.collection('/Joueurs').doc(id).set(joueur);
  }

  read_joueur() {
    return this.db.collection('Joueurs').snapshotChanges();
  }

  update_joueur(nameId, name){
    this.db.doc('Joueurs/' + nameId).update(name);
  }

  delete_joueur(nameId) {
    this.db.doc('Students/' + nameId).delete();
  }
}
