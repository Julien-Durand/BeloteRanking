export class Game {

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
