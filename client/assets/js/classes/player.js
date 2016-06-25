import PlayerBase from './base';

export default class Player extends PlayerBase {
  // Object -> onchange Function
  constructor(updater) {
    super()
    for (var ability of this.abilities.values()) {
      ability.value += 8;
    }
    this.race = null;
    this.onchange = updater.onchange;
    this.charClass = null;
  }

  setClass(charClass) {
    if (this.charClass && this.charClass.name === charClass.name) {
      this.charClass = null;
    } else {
      this.charClass = charClass;
    }

    this.onchange(this);
  }

  setRace(race) {
    if (this.race && this.race.name === race.name) {
      this.race = null;
    } else {
      this.race = race;
    }

    this.onchange(this);
  }

  fetchSkills() {
    var playerSkills = super.fetchSkills();
    var raceSkills = this.race ? this.race.fetchSkills() : [];
    var skills = playerSkills.concat(raceSkills)
    return new Set(skills);
  }

  fetchRace() {
    if (this.race) {
      return this.race;
    }

    return { name: 'None Selected', abilities: [0,0,0,0,0,0] };
  }
}