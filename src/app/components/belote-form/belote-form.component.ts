import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlayersService} from '../../services/players.service';
import {DatePipe, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {BeloteService} from '../../services/belote.service';
import {Game} from '../../models/belote.model';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'BR-belote-form',
  templateUrl: './belote-form.component.html',
  styleUrls: ['./belote-form.component.scss']
})
export class BeloteFormComponent implements OnInit, OnDestroy  {
  beloteForm: FormGroup;
  listPlayers: any[];
  idforGame: string;

  belotegame: Game[];
  beloteSubscription: Subscription;



  /*Date*/
  pipe = new DatePipe('fr');
  now = Date.now();
  date = this.pipe.transform(this.now, 'dd/MM/yy');


  constructor(private formBuilder: FormBuilder,
              private player: PlayersService,
              private belote: BeloteService,
              private router: Router) { }

  ngOnInit(): void {
    this.beloteSubscription = this.belote.BeloteSubject.subscribe(
      (belotegame: Game[]) => {
        this.belotegame = belotegame;
      }
    );
    this.belote.emitBeloteGame();
    this.idforGame = this.player.idGenerator();
    this.initBelote();
    this.onGetPlayers();
  }

  initBelote() {
    this.beloteForm = this.formBuilder.group(
      {
        p1: ['', Validators.required],
        p2: ['', Validators.required],
        p3: ['', Validators.required],
        p4: ['', Validators.required]
      });
  }

  onSaveTeam() {
    const date = this.date;
    const p1 = this.beloteForm.get('p1').value;
    const p2 = this.beloteForm.get('p2').value;
    const p3 = this.beloteForm.get('p3').value;
    const p4 = this.beloteForm.get('p4').value;
    const newBelote = new Game(this.idforGame, date, p1, p2, p3, p4, 0, 0, 1);
    this.belote.createPartie(newBelote, this.idforGame);
    this.router.navigate(['BeloteRanking/Manches', this.idforGame]);
  }


  /*display the players*/
  onGetPlayers(){
    this.player
      .getPlayers()
      .subscribe(
        res => (this.listPlayers = res)
      );
  }

  ngOnDestroy() {
    this.beloteSubscription.unsubscribe();
  }
}
