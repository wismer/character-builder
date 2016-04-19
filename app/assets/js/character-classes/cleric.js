import BaseClass from './base-class';

const SPELL_ALLOW = [
  { level: 1, proficiencyBonus: 2, features: ['divine domain', 'spellcasting'], slots: [3, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
  { level: 2, proficiencyBonus: 2, features: ['channel divinity (1x/rest)', 'domain feature'], slots: [3, 3, 0, 0, 0, 0, 0, 0, 0, 0] },
  { level: 3, proficiencyBonus: 2, features: [], slots: [3, 4, 2, 0, 0, 0, 0, 0, 0, 0] },
  { level: 4, proficiencyBonus: 2, features: ['ability score'], slots: [4, 4, 3, 0, 0, 0, 0, 0, 0, 0] },
  { level: 5, proficiencyBonus: 3, features: ['destroy undead'], slots: [4, 4, 3, 2, 0, 0, 0, 0, 0, 0] }
];

  var arr = [
    [3, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 4, 2, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 3, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 3, 2, 0, 0, 0, 0, 0, 0],
    [4, 4, 3, 3, 0, 0, 0, 0, 0, 0],
    [4, 4, 3, 3, 1, 0, 0, 0, 0, 0],
    [4, 4, 3, 3, 2, 0, 0, 0, 0, 0],
    [4, 4, 3, 3, 3, 1, 0, 0, 0, 0],
    [5, 4, 3, 3, 3, 2, 0, 0, 0, 0],
    [5, 4, 3, 3, 3, 2, 1, 0, 0, 0],
    [5, 4, 3, 3, 3, 2, 1, 0, 0, 0],
    [5, 4, 3, 3, 3, 2, 1, 1, 0, 0],
    [5, 4, 3, 3, 3, 2, 1, 1, 0, 0],
    [5, 4, 3, 3, 3, 2, 1, 1, 1, 0],
    [5, 4, 3, 3, 3, 2, 1, 1, 1, 0],
    [5, 4, 3, 3, 3, 2, 1, 1, 1, 1],
    [5, 4, 3, 3, 3, 3, 1, 1, 1, 1],
    [5, 4, 3, 3, 3, 3, 2, 1, 1, 1],
    [5, 4, 3, 3, 3, 3, 2, 2, 1, 1]
  ];

export default class Cleric extends BaseClass {
  constructor() {
    super();
    this.hitDie = 8;
    this.spellcaster = true;
    this.savingThrowStats = new Set(['wis', 'cha']);
    this.skills = { allow: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion'], pick: 2 };
  }

  _updateSpellAllowance(allowances) {
    this.spellSlots = allowances.slots;
    this.features = allowances.features;
    this.proficiencyBonus = allowances.proficiencyBonus;
  }

  static savingThrowStats() {
    return { wis: true, cha: true };
  }

  static subclasses() {
    return [
      { proto: WarCleric, name: 'War Domain' },
      { proto: TempestDomain, name: 'Tempest Domain' },
      { proto: LightDomain, name: 'Light Cleric' },
      { proto: TrickeryDomain, name: 'Trickery Domain' },
      { proto: NatureDomain, name: 'Nature Cleric' }
    ];
  }


  //
  // applyRace(race) {
  //   super.applyRace(race);
  // }

  // selectDomain(domain) {
  //   switch (domain) {
  //     case 'war':
  //       return new WarCleric(race);
  //     case 'light':
  //       return new LightCleric(race);
  //     case 'trickery':
  //       return new TrickeryCleric(race);
  //     case 'tempest':
  //       return new TempestCleric(race);
  //     case 'nature':
  //       return new NatureCleric(race);
  //     default:
  //       break;
  // }
}

class WarCleric extends Cleric {
  static merge() {
    return {};
  }
}
                                         //                     ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````]]]]]]]]]]]]]````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              FFFFD``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````FFF``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// cla                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          `````````````````````````````````````````````````````````````````````````````````````````````````````````````````                                                                                                                                        ``                                                                                                                                          ss LifeDomain extends Cleric {
//   constructor() {
//     super(...arguments);
//   }
// }
//
class LightDomain extends Cleric {
  constructor() {
    super(...arguments);
  }
}

class TrickeryDomain extends Cleric {
  constructor() {
    super(...arguments);
  }
}

class TempestDomain extends Cleric {
  constructor() {
    super(...arguments);
  }
}

class NatureDomain extends Cleric {
  constructor() {
    super(...arguments);
  }
}


// export function clericClass(race, domain) {
//   switch (domain) {
//     case 'war':
//       return new WarCleric(race);
//     case 'light':
//       return new LightCleric(race);
//     case 'trickery':
//       return new TrickeryCleric(race);
//     case 'tempest':
//       return new TempestCleric(race);
//     case 'nature':
//       return new NatureCleric(race);
//     default:
//       break;
//   }
// }


// class KnowledgeDomain extends Cleric {
//
// }