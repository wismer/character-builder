export const PRIMARY_STATS = [
  { label: 'Strength', bonus: [] }
];

var attributeMap = [
  { short: 'str', long: 'Strength' },
  { short: 'con', long: 'Constitution' },
  { short: 'dex', long: 'Dexterity' },
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

export const raceDetails = [
  'traits',
  'perks',
  'vision',
  'languages'
];

export const raceList = [
  {
    name: 'Dwarf',
    attrs: [0,2,0,0,0,0,0],
    vision: 'Darkvision',
    subraces: [
      {
        name: 'Mountain Dwarf',
        attrs: [2,2,0,0,0,0,0],
        perks: [
          { value: ['light', 'medium'], label: 'Armor' }
        ],
      },

      {
        name: 'Hill Dwarf',
        attrs: [0,2,0,0,0,1,0]
      }
    ]
  },

  {
    name: 'Elf',
    attrs: [2, 0, 0, 1, 0, 0, 0],
    vision: 'Darkvision',
    subraces: [
      {
        name: 'Wood Elf',
        attrs: [2, 0, 0, 1, 1, 0, 0],
        weapons: ['shortbow', 'longbow', 'shortsword', 'longsword'],
        perks: [
          { value: ['Something'], label: 'perk' }
        ]
      },

      {
        name: 'High Elf',
        attrs: [2, 0, 0, 2, 0, 0, 0],
        weapons: ['shortbow', 'longbow', 'shortsword', 'longsword'],
        perks: [
          { value: ['Something Else'], label: 'perk' }
        ]
      }
    ]
  },

  {
    name: 'Fake Race',
    attrs: [2, 0, 0, 1, 0, 0, 0],
    vision: 'Darkvision',
    subraces: [
      {
        name: 'Fake Subrace 1',
        attrs: [2, 0, 0, 1, 1, 0, 0],
        weapons: ['shortbow', 'longbow', 'shortsword', 'longsword'],
        perks: [
          { value: ['Something'], label: 'perk' }
        ]
      },

      {
        name: 'Fake Subrace 0',
        attrs: [2, 0, 0, 2, 0, 0, 0],
        weapons: ['shortbow', 'longbow', 'shortsword', 'longsword'],
        perks: [
          { value: ['Something Else'], label: 'perk' }
        ]
      }
    ]
  },

  {
    name: 'Fake Race 0',
    attrs: [2, 0, 0, 1, 0, 0, 0],
    vision: 'Darkvision',
    subraces: [
      {
        name: 'Fake Race 3',
        attrs: [2, 0, 0, 1, 1, 0, 0],
        weapons: ['shortbow', 'longbow', 'shortsword', 'longsword'],
        perks: [
          { value: ['Something'], label: 'perk' }
        ]
      },

      {
        name: 'Fake Subrace 2',
        attrs: [2, 0, 0, 2, 0, 0, 0],
        weapons: ['shortbow', 'longbow', 'shortsword', 'longsword'],
        perks: [
          { value: ['Something Else'], label: 'perk' }
        ]
      }
    ]
  },
  {
    name: 'Dwarf',
    attrs: [0,2,0,0,0,0,0],
    vision: 'Darkvision',
    subraces: [
      {
        name: 'Mountain Dwarf',
        attrs: [2,2,0,0,0,0,0],
        perks: [
          { value: ['light', 'medium'], label: 'Armor' }
        ],
      },

      {
        name: 'Hill Dwarf',
        attrs: [0,2,0,0,0,1,0]
      }
    ]
  },

  {
    name: 'Elf',
    attrs: [2, 0, 0, 1, 0, 0, 0],
    vision: 'Darkvision',
    subraces: [
      {
        name: 'Wood Elf',
        attrs: [2, 0, 0, 1, 1, 0, 0],
        weapons: ['shortbow', 'longbow', 'shortsword', 'longsword'],
        perks: [
          { value: ['Something'], label: 'perk' }
        ]
      },

      {
        name: 'High Elf',
        attrs: [2, 0, 0, 2, 0, 0, 0],
        weapons: ['shortbow', 'longbow', 'shortsword', 'longsword'],
        perks: [
          { value: ['Something Else'], label: 'perk' }
        ]
      }
    ]
  },

  {
    name: 'Fake Race',
    attrs: [2, 0, 0, 1, 0, 0, 0],
    vision: 'Darkvision',
    subraces: [
      {
        name: 'Fake Subrace 1',
        attrs: [2, 0, 0, 1, 1, 0, 0],
        weapons: ['shortbow', 'longbow', 'shortsword', 'longsword'],
        perks: [
          { value: ['Something'], label: 'perk' }
        ]
      },

      {
        name: 'Fake Subrace 0',
        attrs: [2, 0, 0, 2, 0, 0, 0],
        weapons: ['shortbow', 'longbow', 'shortsword', 'longsword'],
        perks: [
          { value: ['Something Else'], label: 'perk' }
        ]
      }
    ]
  },

  {
    name: 'Fake Race 0',
    attrs: [2, 0, 0, 1, 0, 0, 0],
    vision: 'Darkvision',
    subraces: [
      {
        name: 'Fake Race 3',
        attrs: [2, 0, 0, 1, 1, 0, 0],
        weapons: ['shortbow', 'longbow', 'shortsword', 'longsword'],
        perks: [
          { value: ['Something'], label: 'perk' }
        ]
      },

      {
        name: 'Fake Subrace 2',
        attrs: [2, 0, 0, 2, 0, 0, 0],
        weapons: ['shortbow', 'longbow', 'shortsword', 'longsword'],
        perks: [
          { value: ['Something Else'], label: 'perk' }
        ]
      }
    ]
  }
]


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
      tags: []
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