
class Item {
  constructor(item, traitList) {
    this.name   = item.name;
    this.cost   = item.cost;
    this.traits = item.traits.map(id => traitList.find(trait => trait.id === id));
  }

  tooltip() {
    return {
      name: this.name,
      cost: this.cost,
      traits: this.traits,
      characteristics: []
    };
  }
}

class Weapon extends Item {
  constructor(item, traitList) {
    super(item, traitList);
    this.damage = item.damage;
    this.dmgType = item.damage_type;
    this.diceCount = item.dice_count;
    this.damageType = item.damage_type;
    this.shortRng = item.short_range;
    this.lngRng = item.long_range;
  }

  tooltip() {
    var tooltip = super.tooltip();
    tooltip.damage = `${this.diceCount}d${this.damage}`;
    tooltip.damageType = this.damageType;
    if (this.shortRng) {
      tooltip.characteristics.push(
        { label: 'range', value: `${this.shortRng} ft. / ${this.lngRng} ft.`}
      );
    }
  }
}

class Armor extends Item {
  constructor(item, traitList) {
    super(item, traitList);
    this.armorClass = item.armor_class;
  }
}

export { Armor, Item, Weapon };