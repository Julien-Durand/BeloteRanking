import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  prenom: Observable<any>;
  countManche = 1;
  totA = 0;
  totB = 0;

  constructor(private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private belote: BeloteService,
              private db: AngularFirestore,
              private router: Router) {
    this.id = this.actRoute.snapshot.params.id;
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
  }

  initManche() {
    this.mancheForm = this.formBuilder.group({
      scoreTeamA: [ 0, Validators.required],
      scoreTeamB: [ 0, Validators.required],
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
    this.totA = this.totA + scoreA;
    this.totB = this.totB + scoreB;
    this.updateCurrentManche(this.id, this.countManche, this.totA, this.totB, preneur);
    this.countManche = ++this.countManche;
    if(this.countManche === 13) {
      this.belote.addFinalBelote(this.prenom, this.id);
      this.router.navigate(['BeloteRanking']);
    }
  }
  /* Update manche */
  updateCurrentManche(id, manche, scoreTeamA, scoreTeamB, preneur) {
    this.belote.updateManche(id, manche, scoreTeamA, scoreTeamB, preneur);
  }
  getPlayerNameInGame(id) {
    this.belote
      .getPlayerGame(id)
      .subscribe(
        res => (this.playerNameOfGame = res)
      );
  }


}
