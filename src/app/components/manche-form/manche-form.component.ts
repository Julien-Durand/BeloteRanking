import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BeloteService} from '../../services/belote.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Game} from '../../models/belote.model';

@Component({
  selector: 'BR-manche-form',
  templateUrl: './manche-form.component.html',
  styleUrls: ['./manche-form.component.scss']
})
export class MancheFormComponent implements OnInit {
  id: string;
  mancheForm: FormGroup;
  playerNameOfGame;
  _db: AngularFirestore;
  prenom: Observable<any>;

  constructor(private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private belote: BeloteService,
              private db: AngularFirestore) {
    this.id = this.actRoute.snapshot.params.id;
    this._db = db;
    this.prenom = db
      .collection<Game>('CurrentGame')
      .snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
  }

  ngOnInit(): void {
    this.initManche();
    // this.getPlayerNameInGame(this.id);

  }

  initManche() {
    this.mancheForm = this.formBuilder.group({
      scoreTeamA: ['0', Validators.required],
      scoreTeamB: ['0', Validators.required],
      preneur: ['', Validators.required],
      beloteA: [false, Validators.required],
      capotA: [false, Validators.required],
      beloteB: [false, Validators.required],
      capotB: [false, Validators.required]
    });
  }

  onSaveManche() {
    const scoreA = this.mancheForm.get('scoreTeamA').value;
    const scoreB = this.mancheForm.get('scoreTeamB').value;
    const preneur = this.mancheForm.get('preneur').value;

  }
  getPlayerNameInGame(id) {
    this.belote
      .getPlayerGame(id)
      .subscribe(
        res => (this.playerNameOfGame = res)
      );
  }

}
