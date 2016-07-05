import PlayerBase from './base';
import { save } from '../util/adapter';


const jsonMapping = new Map([
  ['race', ['race', (race) => race ? race.id : null]],
  ['charClass', ['character_class', (klass) => klass ? klass.id : null]],
  ['abilities', ['ability_scores', (abs) => abs.map(a => a.base + a.racialBonus + a.value)]],
  ['id', ['id', (id) => id || null]]
])

export default class Player extends PlayerBase {
  // Object -> onchange Function
  constructor(updater) {
    super();
    for (var ability of this.abilities.values()) {
      ability.value = 0;
      ability.base = ability.value;
      ability.racialBonus = 0;
    }
    this.race = null;
    this.languages = ['Common'];
    this.onchange = updater.onchange;
    this.charClass = null;
    this._id = null;
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

  toJSON(json={}) {
    for (let [key, props] of jsonMapping.entries()) {
      var [jsonField, func] = props;
      var field = this[key];
      json[jsonField] = func(field);
    }

    return JSON.stringify(json);
  }

  saveRace(succ, fail) {
    save('player/', this.toJSON(), succ, fail);
  }

  setAbilities(newAbilities) {
    this.abilities = newAbilities;
    save('player/', this.toJSON(), (response) => {
      this.id = response.id;
      this.onchange(this);
    }, () => {debugger});
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

  displayAbilities() {
    return this.abilities.map((ability, i) => {
      return {
        name: ability.name,
        key: ability.key,
        racialBonus: this.race.abilities[i],
        base: 0,
        value: 0
      };
    });
  }
}