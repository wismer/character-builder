export default class PlayerBase {
  constructor() {
    this.abilities = [
      { name: 'Strength', value: 0, base: 0, racialBonus: 0, key: 'str' },
      { name: 'Constitution', value: 0, base: 0, racialBonus: 0, key: 'con' },
      { name: 'Dexterity', value: 0, racialBonus: 0, base: 0, key: 'dex' },
      { name: 'Intelligence', value: 0, racialBonus: 0, base: 0, key: 'int' },
      { name: 'Wisdom', value: 0, racialBonus: 0, base: 0, key: 'wis' },
      { name: 'Charisma', value: 0, racialBonus: 0, base: 0, key: 'cha' }
    ];
    this.skills = new Set();
  }

  fetchSkills() {
    return Array.from(this.skills);
  }
}