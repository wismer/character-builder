import Bard from './bard';
import Monk from './monk';
import Fighter from './fighter';
import Cleric from './cleric';
import Warlock from './warlock';
import Paladin from './paladin';
import Sorcerer from './sorcerer';
import Thief from './thief';

export default function (className) {
  switch (className) {
    case 'monk':
      return new Monk();
    case 'bard':
      return new Bard();
    case 'fighter':
      return new Fighter();
    case 'cleric':
      return new Cleric();
    case 'paladin':
      return new Paladin();
    case 'warlock':
      return new Warlock();
    case 'sorcerer':
      return new Sorcerer();
    case 'thief':
      return new Thief();
    default:
      break;
  }
}