import Race from './race';

export default class Halfling extends Race {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    speed -= 5;
    stats.update('dexterity', 2);
    traits.add('Languages', 'Halfling');
    return { stats, traits, speed, hpMax };
  }

  static getName(name='') {
    return `Halfling${name}`;
  }

  static subraces() {
    return super.subraces([Lightfoot, Stout]);
  }
}

class Lightfoot extends Halfling {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('charisma', 1);
    return { stats, traits, speed, hpMax };
  }

  static getName() {
    return super.getName(' (Lightfoot)');
  }
}

class Stout extends Halfling {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('constitution', 1);
    traits.add('Advantage Against', 'poison');
    traits.add('Resistance To', 'poison');
    return { stats, traits, speed, hpMax };
  }

  static getName() {
    return super.getName(' (Stout)');
  }
}