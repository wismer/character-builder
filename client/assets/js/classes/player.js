export default class Player {
  constructor() {
    this.stats = {
      wis: 8,
      int: 8,
      cha: 8,
      dex: 8,
      con: 8,
      str: 8
    };

    this.modifiers      = {};
    this.perks          = new Set();
    this.langs          = new Set(['common']);
    this.armorProfs     = new Set();
    this.weaponProfs    = new Set();
    this.advantage      = new Set();
    this.savingThrow    = new Set();
    this.vision         = new Set();
    this.hitPoints      = 0;
    this.level          = 1;
    this.race           = null;
    this.characterClass = null;
    this._ptsRemaining  = 27;
  }

  selectClass(klass) {
    // TODO
  }

  getAttributes(savingThrowStats) {
    return readableAttributes.map(attr => {
      var isActive = savingThrowStats[attr.key] || false;
      return { name: attr.name, value: this.stats[attr.key], isActive };
    });
  }

  attributeModifier(trait) {
    var val = Math.floor((this.stats[trait.attribute.substr(0, 3)] - 10) / 2);
    console.log(val)
    return val;
  }

  selectRace(race) {
    var { stats, traits } = race.merge();
    this.race = race.getName();

    var updateStats = () => {
      for (var stat in stats) {
        this.stats[stat]    += stats[stat];
        this.modifiers[stat] = Math.floor((this.stats[stat] - 10) / 2);
      }
    };

    for (var trait in traits) {
      var attr = traits[trait];
      if (typeof attr === 'number') {
        this[trait] = attr;
      } else {
        var set = this[trait];
        attr.forEach(val => set.add(val));
      }
    }

    updateStats();

    this.onAbilityScore = updateStats;
  }

  levelUp() {
    this.level += 1;
    var attributes = this.race.levelUp(this.level);
    for (var attr in attributes) {
      this.stats[attr] += attributes[attr];
    }
  }
}