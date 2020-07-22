import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {PlayersService} from '../../services/players.service';
import {Joueur} from '../../models/joueur.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'BR-joueur-form',
  templateUrl: './joueur-form.component.html',
  styleUrls: ['./joueur-form.component.scss']
})
export class JoueurFormComponent implements OnInit {
  joueurForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private player: PlayersService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.joueurForm = this.formBuilder.group(
      {
        name: ['', Validators.required]
      });
  }

  addPlayer(joueur: Joueur) {
    return this.player.create_joueur(joueur);
  }

  onSavePlayer() {
    const name = this.joueurForm.get('name').value;
    const id = this.player.idGenerator();
    this.addPlayer(name);
    this.router.navigate(['BeloteRanking']);
  }

}
