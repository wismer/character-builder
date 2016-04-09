import BaseClass from './base-class';

export default class Druid extends BaseClass {
  constructor(race) {
    super(race);
    this.armorProfs = ['light', 'medium', 'shields'];
    this.weaponProfs = [
      'clubs',
      'daggers',
      'darts',
      'javelins',
      'maces',
      'quarterstaffs',
      'scimitars',
      'sickles',
      'slings',
      'spears'
    ];
    this.savingThrowStats = ['int', 'wis'];
  }

  static savingThrowStats() {
    return { int: true, wis: true };
  }
}