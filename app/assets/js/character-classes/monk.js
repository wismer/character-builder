import BaseClass from './base-class';

export class Monk extends BaseClass {
  constructor(race) {
    super(race);
    this.weaponProfs.add('short swords');
    this.weaponProfs.add('simple');
    this.skills = {
      from: [
        'Acrobatics',
        'Athletics',
        'History',
        'Insight',
        'Religion',
        'Stealth'
      ],

      allow: 2
    };
  }
}