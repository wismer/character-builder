export default class Race {
  constructor({ name, attrs, perks, advantages, resists, languages, subraces, weapons, armor }) {
    this.name = name;
    this.attrs = attrs;
    this.perks = perks;
    this.advantages = advantages;
    this.resists = resists;
    this.armor = armor;
    this.weapons = weapons;
    this.languages = languages;
    this.subraces = (subraces || []).map(subrace => new Race(subrace));
  }

  static merge() {
    var attrs = [
      ['constitution', 0],
      ['wisdom', 0],
      ['dexterity', 0],
      ['strength', 0],
      ['intelligence', 0],
      ['charisma', 0],
      ['any', 0]
    ];
    var stats = new Map(attrs);
    // apparently subclassing Map doesn't work with current es6 transpilers
    stats.update = function(attr, val) {
      return this.set(attr, this.get(attr) + val);
    };

    stats.toList = function(list=[]) {
      for (var [attr, val] of this) {
        if (val > 0) {
          list.push(`+${val} ${attr}`);
        }
      }
      return list;
    };

    var traits = new Map([
      ['Armor', new Set()],
      ['Weapons', new Set()],
      ['Languages', new Set(['Common'])],
      ['Perks', new Set()],
      ['Advantage Against', new Set()],
      ['Resistance To', new Set()]
    ]);

    traits.toList = function(list=[]) {
      for (var [attr, val] of this) {
        if (val.size > 0) {
          var values = Array.from(val).map(val => {
            return {
              isKeyword: val.includes('*'),
              val
            };
          });
          list.push({ attr, values });
        }
      }
      return list;
    };

    traits.add = function(attr, ...values) {
      values.forEach(val => this.set(attr, this.get(attr).add(val)));
    };

    return {
      stats: stats,
      traits: traits,
      speed: 30,
      hpMax: 0
    };
  }

  static subraces(subraces=[]) {
    return subraces.map(klass => {
      var attributes = klass.merge();
      return {
        name: klass.getName(),
        traits: attributes.traits.toList(),
        stats: attributes.stats.toList(),
        klass: klass,
        subraces: []
      };
    });
  }
}