import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlayersService} from '../../services/players.service';
import {DatePipe, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {BeloteService} from '../../services/belote.service';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'BR-belote-form',
  templateUrl: './belote-form.component.html',
  styleUrls: ['./belote-form.component.scss']
})
export class BeloteFormComponent implements OnInit {
  beloteForm: FormGroup;
  listPlayers: any[];
  playerInfo: any;
  teamOk: boolean;

  /*Date*/
  pipe = new DatePipe('fr');
  now = Date.now();
  date = this.pipe.transform(this.now, 'dd/MM/yy');


  constructor(private formBuilder: FormBuilder,
              private player: PlayersService,
              private belote: BeloteService) { }

  ngOnInit(): void {
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
    this.teamOk = true;
    const id = this.player.idGenerator();
    const p1 = this.beloteForm.get('p1').value;
    const p2 = this.beloteForm.get('p2').value;
    const p3 = this.beloteForm.get('p3').value;
    const p4 = this.beloteForm.get('p4').value;
    this.belote.addGame(id, this.date, p1, p2, p3, p4);

  }
  /*display the players*/
  onGetPlayers(){
    this.player
      .getPlayers()
      .subscribe(
        res => (this.listPlayers = res)
      );
  }

  getPlayerInfo(id) {
    this.player
      .getPlayer(id)
      .subscribe(
        res => (this.playerInfo = res)
      );
  }
}
