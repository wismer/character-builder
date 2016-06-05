import { readableAttributes } from '../util/constants';

export default class PlayerRace {
  constructor(race) {
    this.name          = race.name;
    this.skills        = race.skills;
    this.subraces      = race.subraces || [];
    this.hasDarkvision = race.has_darkvision;
    this.armor         = new Set(race.armor)
    this.weapons       = new Set(race.weapons);
    this.languages     = new Set(race.languages);
    this.speed         = race.speed;
    this.traits        = race.racialtraits;
    this.abilityScores = race.ability_scores;
  }

  isActive(selectedRace) {
    return selectedRace && selectedRace.name === this.name && this.active;
  }
  hasSubraces() {
    return this.subraces.length > 0;
  }

  toPreview(subrace, characteristics=[]) {
    var { name, armor, weapons, languages, speed, traits } = this;
    var attributes = this.attributes.map((attr, i) => subrace.attributes[i] + attr);
    var abilityScores = readableAttributes(attributes);
    // update fields by merging them together.
    subrace.armor.forEach(armor => this.armor.add(armor));
    subrace.weapons.forEach(weapon => this.weapons.add(weapon));
    subrace.languages.forEach(language => this.languages.add(language));
    characteristics.push({ label: 'Languages', value: Array.from(languages).join(', ') });
    characteristics.push({ label: 'Speed', value: `${speed} ft.` });

    if (armor.size > 0) {
      characteristics.push({ label: 'Armor', value: Array.from(armor).join(', ') });
    }

    if (weapons.size > 0) {
      characteristics.push({ label: 'Weapon Skills', value: Array.from(weapons).join(', ') });
    }

    if (this.hasDarkvision) {
      var ft = this.name === 'Drow' ? 120 : 60;
      characteristics.push({ label: 'Vision', value: 'Darkvision', tooltip: `See low-lit areas up to ${ft}ft.` });
    }

    return { name, abilityScores, characteristics, traits };
  }
}