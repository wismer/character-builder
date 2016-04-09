import Race from './race';

export default class HalfOrc extends Race {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('strength', 2);
    stats.update('constitution', 1);
    traits.add('Perks', 'Darkvision*', 'Menacing (free Intimidation skill)', 'Relentless Endurance*', 'Savage Attacks*');
    traits.add('Languages', 'Orcish');
    return { stats, traits, speed, hpMax };
  }

  static getName() {
    return 'Half-Orc';
  }
}