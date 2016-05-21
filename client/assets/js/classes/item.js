
class Item {
  constructor(item) {
    this.name   = item.name;
    this.cost   = item.cost;
    this.traits = item.traits;
  }
}

class Weapon extends Item {
  constructor(item) {
    super(item);
    this.damage = item.damage;
    this.dmgType = item.damage_type;
    this.diceCount = item.dice_count;
  }
}

class Armor extends Item {
  constructor(item) {
    super(item);
    this.armorClass = item.armor_class;
  }
}

export { Armor, Item, Weapon };