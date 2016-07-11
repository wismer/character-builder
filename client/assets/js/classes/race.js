import PlayerBase from './base';

export default class Race extends PlayerBase {
  // Array<Int>, Array<String>
  constructor(race, parent=null) {
    super();
    this.parent = parent;
    this.name = race.name;
    this.speed = race.speed;
    this.id = race.id;
    this.skillSet = race.skills;
    if (race.subraces) {
      this.subraces = race.subraces.map(subrace => new Race(subrace, race));
    } else {
      this.subraces = [];
    }
    // for (var [idx, score] of race.ability_scores.entries()) {
    //   this.abilities[idx]
    // }
    this.abilities = race.ability_scores;
  }

  get tooltip() {
    return {
      abilities: this.abilities,
      skills: this.skills,
      speed: this.speed,
      name: this.parent ? `${this.name} ${this.parent.name}` : this.name
    };
  }

  * skills() {
    for (skill of this.skillSet) {
      yield skill;
    }
  }
}
