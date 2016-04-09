import Cleric from './cleric';
import Bard from './bard';
import Fighter from './fighter';
import Druid from './druid';
import Paladin from './paladin';
import Warlock from './warlock';
import Thief from './thief';
import Monk from './monk';

export default [
  { proto: Cleric,  name: 'Cleric',  hasSubclasses: true  },
  { proto: Bard,    name: 'Bard',    hasSubclasses: false },
  { proto: Fighter, name: 'Fighter', hasSubclasses: false },
  { proto: Druid,   name: 'Druid',   hasSubclasses: false },
  { proto: Paladin, name: 'Paladin', hasSubclasses: false },
  { proto: Warlock, name: 'Warlock', hasSubclasses: false },
  { proto: Thief,   name: 'Thief',   hasSubclasses: false },
  { proto: Monk,    name: 'Monk',    hasSubclasses: false }
];