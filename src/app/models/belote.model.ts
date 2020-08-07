export class Game {
  P1: {name: string, id: string};
  P2: {name: string, id: string};
  P3: {name: string, id: string};
  P4: {name: string, id: string};
  idgame: string;
  dateGame: Date;
  scoreTeamA: number;
  scoreTeamB: number;
  manche1: {scoreA: number, scoreB: number, prise: string};
  manche2: {scoreA: number, scoreB: number, prise: string};
  manche3: {scoreA: number, scoreB: number, prise: string};
  manche4: {scoreA: number, scoreB: number, prise: string};
  manche5: {scoreA: number, scoreB: number, prise: string};
  manche6: {scoreA: number, scoreB: number, prise: string};
  manche7: {scoreA: number, scoreB: number, prise: string};
  manche8: {scoreA: number, scoreB: number, prise: string};
  manche9: {scoreA: number, scoreB: number, prise: string};
  manche10: {scoreA: number, scoreB: number, prise: string};
  manche11: {scoreA: number, scoreB: number, prise: string};
  manche12: {scoreA: number, scoreB: number, prise: string};

  constructor(public id: string,
              public date: string,
              public joueur1: string,
              public joueur2: string,
              public joueur3: string,
              public joueur4: string,
              public scoreA: number,
              public scoreB: number,
              public manche: number) {
  }
}
