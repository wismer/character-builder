export default class Skill {
  constructor(skills) {
    this.skills = new Map(skills);
  }

  [Symbol.iterator]() {
    return this.skills[Symbol.iterator]();
  }

  get tooltip() {
    var items = [];

    for (var [key, value] of this.skills.entries()) {
      items.push({ desc: value.desc, name: value.name });
    }

    var tooltips = { name: 'Skills', items };

    return tooltips;
  }
}