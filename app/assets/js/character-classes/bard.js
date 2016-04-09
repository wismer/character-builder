import BaseClass from './base-class';


export default class Bard extends BaseClass {
  static savingThrowStats() {
    return { cha: true, dex: true };
  }
}
