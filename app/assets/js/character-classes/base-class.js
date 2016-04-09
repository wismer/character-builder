function attributePtAdd(attr, remainingPts=27) {
  var cost = attr <= 15 ? 1 : 2;
  if (remainingPts >= cost) {
    return [attr + 1, remainingPts - cost];
  } else {
    return [attr, remainingPts];
  }
}

export default class BaseClass {
  constructor() {
    this.hpDie = 8;
    this.savingThrowStats = [];
    this.spellcaster = false;
    this._pointAllowance = 27;
    this.proficiencyBonus = 2;
  }

  increaseLevel() {
    this.level += 1;
    if ((this.level % 4 === 0 && this.level < 20) || this.level === 19) {
      var raceAttributes = this.race.abilityScoreChange();
      for (var attr in raceAttributes) {
        this.stats[attr] += raceAttributes[attr];
      }
    }
  }

  static subClasses() {
    return [];
  }

  decreaseLevel() {
    this.level -= 1;
  }

  applyRace(race) {
    this.stats = race.stats;
    this.level = race.level;
    this.armorProfs = race.armorProfs;
    this.weaponProfs = race.weaponProfs;
    return this;
  }

  modifier(attr, value=null) {
    var attribute = this.stats[attr];
    if (value) {
      return Math.floor(((value + attribute) - 10) / 2);
    }
    return Math.floor((this.stats[attr] - 10) / 2);
  }

  decreaseStat(attr) {
    var ptValue = this.stats[attr] > 15 ? 1 : 2;
    this.stats[attr] -= 1;
    this._pointAllowance += ptValue;
  }

  increaseStat(attr) {
    var ptValue = this.stats[attr] < 16 ? 1 : 2;
    this.stats[attr] += 1;
    this._pointAllowance -= ptValue;
  }
}