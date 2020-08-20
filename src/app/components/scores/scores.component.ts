import { Component, OnInit } from '@angular/core';
import {BeloteService} from '../../services/belote.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Game} from '../../models/belote.model';

@Component({
  selector: 'BR-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  listGames: any[];
  list: Observable<any[]>;

  constructor(private belote: BeloteService,
              private db: AngularFirestore) { }

  ngOnInit(): void {
    // this.onGetGames();
    this.list = this.db
      .collection('Games', ref => ref.orderBy('date', 'desc'))
      .snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Game;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));

  }

  // onGetGames() {
  //   this.belote
  //     .getGame();
  // }
}
