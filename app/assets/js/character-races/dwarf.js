import Race from './race';
export default class Dwarf extends Race {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    speed = 25;
    stats.update('constitution', 2);
    traits.add('Perks', 'stonecutting');
    traits.add('Perks', 'darkvision');
    traits.add('Languages', 'dwarven');
    traits.add('Advantage Against', 'poison');
    traits.add('Resistance To', 'poison');
    traits.add('Weapons', 'battleaxe', 'handaxe', 'throwing hammer', 'warhammer');
    return { stats, traits, speed, hpMax };
  }

  static getName(name='') {
    return `Dwarf${name}`;
  }

  static subraces() {
    return super.subraces([HillDwarf, MountainDwarf]);
  }
}

class HillDwarf extends Dwarf {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    hpMax = 1;
    stats.update('wisdom', 1);
    return { stats, traits, speed, hpMax };
  }

  static getName() {
    return super.getName(' (Hill)');
  }

  static getAttributes() {
    var raceAttributes = super.getAttributes();
    raceAttributes.attributes.push('+1 Wisdom');
    raceAttributes.misc.push('+1 max hp for every level, beginning with level 1');
    return raceAttributes;
  }
}

class MountainDwarf extends Dwarf {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('strength', 2);
    traits.add('Armor', 'light', 'medium', 'heavy');
    return { stats, traits, speed, hpMax };
  }

  static getName() {
    return super.getName(' (Mountain)');
  }
}