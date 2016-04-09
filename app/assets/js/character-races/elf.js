import Race from './race';

export default class Elf extends Race {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('dexterity', 2);
    traits.add('Perks', 'Darkvision*');
    traits.add('Languages', 'Elven');
    traits.add('Advantage Against', 'charm');
    return { stats, traits, speed, hpMax };
  }

  static getName(name='') {
    return `Elf${name}`;
  }

  static subraces() {
    return super.subraces([WoodElf, Drow, HighElf]);
  }
}

class HighElf extends Elf {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('intelligence', 1);
    traits.add('Weapons', 'shortsword', 'longsword', 'shortbow', 'longbow');
    return { stats, traits, speed, hpMax };
  }

  static getName() {
    return super.getName(' (High)');
  }
}

class WoodElf extends Elf {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('wisdom', 1);
    traits.add('Weapons', 'shortsword', 'longsword', 'shortbow', 'longbow');
    speed += 5;
    traits.add('Perks', 'Mask of the Wild');
    return { stats, traits, hpMax, speed };
  }

  static getName() {
    return super.getName(' (Wood)');
  }
}

class Drow extends Elf {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('charisma', 1);
    traits.add('Perks', 'Darkvision* (enhanced)', 'Sunlight Sensitivity');
    traits.add('Weapons', 'rapiers', 'shortswords', 'rapiers', 'hand crossbows');
    return { stats, traits, speed, hpMax };
  }

  static getName() {
    return super.getName(' (Drow)');
  }
}