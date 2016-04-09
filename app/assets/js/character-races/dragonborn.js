import Race from './race';

export default class Dragonborn extends Race {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('strength', 2);
    stats.update('charisma', 1);
    traits.add('Languages', 'Draconic');
    traits.add('Perks', 'Draconic Breath*');
    return { stats, traits, speed, hpMax };
  }

  static getName() {
    return 'Dragonborn';
  }
}