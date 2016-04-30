export const PRIMARY_STATS = [
  { label: 'Strength', bonus: [] }
];

var attributeMap = [
  { short: 'str', long: 'Strength' },
  { short: 'dex', long: 'Dexterity' },
  { short: 'con', long: 'Constitution' },
  { short: 'int', long: 'Intelligence' },
  { short: 'wis', long: 'Wisdom' },
  { short: 'cha', long: 'Charisma' },
  { short: 'any', long: 'Any' }
];

export function readableAttributes(attributes, readable=[]) {
  for (var i = 0; i < 7; i++) {
    if (attributes[i] > 0) {
      var attribute = attributeMap[i];
      attribute.value = attributes[i];
      readable.push(attribute);
    }
  }

  return readable;
}

export const sampleRaceJSON = {
  races: [
    {
      name: 'Tiefling',
      attrs: [0,0,0,1,0,2,0],
      tags: [
        { type: 'attributes', value: [0,0,0,1,0,2,0] },
        { type: 'traits', value: 'Infernal Legacy' },
        { type: 'traits', value: 'Darkvision' },
        { type: 'resistances', value: 'fire' },
        { type: 'languages', value: 'Infernal' }
      ],
      subraces: []
    },

    {
      name: 'Dragonborn',
      attrs: [2, 0, 0, 0, 0, 1, 0],
      tags: [],
      subraces: [
        {
          name: 'Black',
          tags: [
            
          ]
        }
      ]
    },
    {
      name: 'Dwarf',
      attrs: [0,0,2,0,0,0,0],
      armor: [],
      weapons: ['handaxe', 'warhammer', 'throwing hammer', 'battleaxe'],
      perks: [
        {
          name: 'Stonecutting',
          desc: 'Stonecutting description'
        }
      ],

      traits: [
        { category: 'advantages', value: ['poison'] },
        { category: 'resistances', value: ['poison'] },
        { category: 'vision', value: ['darkvision'] },
        { category: 'languages', value: ['Common', 'Dwarven'] }
      ],

      subraces: [
        {
          name: 'Mountain',
          attrs: [2,0,2,0,0,0,0],
          traits: [
            {
              category: 'Dwarven Resilience',
              value: ['light', 'medium'],
              for: 'armor'
            }
          ],
        },
        {
          name: 'Hill',
          attrs: [0,0,2,0,1,0,0],
          traits: [
            {
              category: 'on-level',
              value: ['Something'],
              for: 'hp'
            },
          ]
        }
      ]
    }
  ]
};

// consider enhancement?