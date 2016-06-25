import PlayerBase from './base';

export default class Race extends PlayerBase {
  // Array<Int>, Array<String>
  constructor(race, parent=null) {
    super()
    this.parent = parent;
    this.name = race.name;
    this.skills = race.skills;
    if (race.subraces) {
      this.subraces = race.subraces.map(subrace => new Race(subrace, race));
    } else {
      this.subraces = [];
    }
    this.abilities = race.ability_scores;
  }
}
