import BaseClass from './base-class';

export default class Fighter extends BaseClass {
  constructor(race) {
    super(race);
    this.hpDie = 10;
    this.savingThrowStats = ['str', 'con'];
    this.skills = {
      from: [
        'acrobatics',
        'animal handling',
        'athletics',
        'history',
        'insight',
        'intimidation',
        'perception',
        'survival'
      ],

      allow: 2
    };
  }

  static savingThrowStats() {
    return { con: true, str: true };
  }
}