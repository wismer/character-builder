export default class CharacterClass {
  constructor(charClass, parent=null) {
    this.parent = parent;
    this.id = charClass.id;
    this.name = charClass.name;
    this.skillChoices = charClass.skill_choices;
    this.langs = charClass.languages;
    this.hpDie = charClass.hp_die;
    this.savingThrows = charClass.saving_throws;
    this.armor = charClass.armor;
    this.weapons = charClass.weapons;
    this.subclasses = (charClass.subclasses || []).map(subclass => new CharacterClass(subclass));
  }
}