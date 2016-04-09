import Race from './race';

export default class Human extends Race {
  static getName() {
    return 'Human';
  }

  static merge() {
    var { stats, traits, speed, hpMax } = super.merge();
    stats.update('any', 2);
    return { stats, traits, speed, hpMax };
  }
}