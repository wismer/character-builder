import Race from './race';

export default class Tiefling extends Race {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('intelligence', 1);
    stats.update('charisma', 2);
    traits.add('Perks', 'darkvision', 'Infernal Legacy*');
    traits.add('Resistance To', 'fire');
    traits.add('Languages', 'Infernal');
    return { stats, traits, speed, hpMax };
  }

  static getName() {
    return 'Tiefling';
  }
}