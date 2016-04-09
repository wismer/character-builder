import Race from './race';

export default class Gnome extends Race {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('intelligence', 2);
    speed -= 5;
    traits.add('Perks', 'Darkvision*', 'Gnome Cunning*');
    return { stats, traits, speed, hpMax };
  }

  static getName(name='') {
    return `Gnome${name}`;
  }

  static subraces() {
    return super.subraces([ForestGnome, RockGnome]);
  }
}

class ForestGnome extends Gnome {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('dexterity', 1);
    traits.add('Perks', 'Natural Illusionist (Intelligence Based)*', 'Speak with Small Beasts*');
    return { stats, traits, speed, hpMax };
  }

  static getName() {
    return super.getName(' (Forest)');
  }
}

class RockGnome extends Gnome {
  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('constitution', 1);
    traits.add('Perks', 'Artificers Lore*', 'Tinker*');
    return { stats, traits, speed, hpMax };
  }

  static getName() {
    return super.getName(' (Rock)');
  }
}