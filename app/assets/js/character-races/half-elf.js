import Race from './race';

export default class HalfElf extends Race {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('charisma', 2);
    stats.update('any x2', 1);
    traits.add('Perks', 'Darkvision*', '2x additional skills of your choice');
    traits.add('Advantage Against', 'charm');
    traits.add('Languages', 'Elven', 'additional one of your choice');
    return { stats, traits, speed, hpMax };
  }

  static getName() {
    return 'Half-Elf';
  }
}