import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {PlayersService} from '../../services/players.service';
import {Joueur} from '../../models/joueur.model';

@Component({
  selector: 'BR-joueur-form',
  templateUrl: './joueur-form.component.html',
  styleUrls: ['./joueur-form.component.scss']
})
export class JoueurFormComponent implements OnInit {
  joueurForm: FormGroup;

  listPlayers: any[];

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private player: PlayersService) { }

  ngOnInit(): void {
    this.initForm();
    this.onGetPlayers();
  }

  initForm() {
    this.joueurForm = this.formBuilder.group(
      {
        name: ['', Validators.required]
      });
  }

  /*action add player with the form*/
  onSavePlayer() {
    const name = this.joueurForm.get('name').value;
    const id = this.player.idGenerator();
    const uid = this.authService.getUserId();
    this.player.addPlayer(uid, name, id);
    this.router.navigate(['BeloteRanking']);
  }

  /*display the players*/
  onGetPlayers(){
    this.player
      .getPlayers()
      .subscribe(
        res => (this.listPlayers = res)
      );
  }

}
