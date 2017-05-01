abilities_and_skills = (
    ('strength', 'Strength'),
    ('dexterity', 'Dexterity'),
    ('constitution', 'Constitution'),
    ('wisdom', 'Wisdom'),
    ('intellect', 'Intellect'),
    ('charisma', 'Charisma'),
    ('investigation', 'Investigation'),
    ('deception', 'Deception'),
    ('perception', 'Perception'),
    ('athletics', 'Athletics'),
    ('acrobatics', 'Acrobatics'),
    ('sleight of hand', 'Sleight of Hand'),
    ('stealth', 'Stealth'),
    ('arcana', 'Arcana'),
    ('history', 'History'),
    ('nature', 'Nature'),
    ('religion', 'Religion'),
    ('animal handling', 'Animal Handling'),
    ('insight', 'Insight'),
    ('medicine', 'Medicine'),
    ('survival', 'Survival'),
    ('intimidation', 'Intimidation'),
    ('performance', 'Performance'),
    ('persuasion', 'Persuasion')
)

number_range = [i for i in range(0, 30)]

ITEM_CATEGORIES = [
    ('martial', 'Martial Weapon'),
    ('simple', 'Simple Weapon'),
    ('light', 'Light Armor'),
    ('medium', 'Medium Armor'),
    ('heavy', 'Heavy Armor'),
    ('shield', 'Shield')
]
ARMOR_VALUES = [(i, '{ac}AC'.format(ac=i)) for i in number_range]

armor = ['light', 'medium', 'heavy', 'shield']
ARMOR_TYPES = [(a, a.capitalize()) for a in armor]

DIE_COUNT = [(die, '{} dice'.format(die)) for die in number_range[1:8]]

dice = [4, 6, 8, 10, 12, 20, 100]
DIE_CHOICES = [(die, 'd{}'.format(die)) for die in dice]

range_formatter = lambda x, i: (x[i], '{} ft.'.format(x[i]))
ranges = (
    (5, 15),
    (20, 60),
    (30, 120),
    (80, 320),
    (100, 400),
    (150, 600),
)

LONG_RANGE = [(None, 'Not Ranged')] + [range_formatter(rng, 0) for rng in ranges]
SHORT_RANGE = [(None, 'Not Ranged')] + [range_formatter(rng, 1) for rng in ranges]

dmg_types = ['bludgeoning', 'piercing', 'slashing']
MUNDANE_DAMAGE_TYPES = [(dmg, dmg.capitalize()) for dmg in dmg_types]

SPELL_SHAPES = (
    (None, 'None'),
    ('cone', 'Cone'),
    ('straight', 'Straight Line'),
    ('wall', 'Wall'),
    ('pb', 'Point Blank Area'),
    ('square area', 'Area')
)

abilities_all = [
    dict(short='str', name='Strength', desc='Measures bodily power, athletic training, and the extent to which you can exert raw physical force.'),
    dict(short='dex', name='Dexterity', desc='Measures agility, reflexes, and balance.'),
    dict(short='con', name='Constitution', desc='Measures health, stamina, and vital force.'),
    dict(short='int', name='Intelligence', desc='Measures mental acuity, accuracy of recall, and the ability to reason.'),
    dict(short='wis', name='Wisdom', desc='reflects how attuned you are to the world around you and represents perceptiveness and intuition.'),
    dict(short='cha', name='Charisma', desc='Measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.'),
    dict(short='any', name='Any', desc='May increase any other ability score')
]

ABILITIES = [(ability['name'], ability['desc']) for ability in abilities_all]

DAMAGE_SOURCES = (
    ('weapon', 'Weapon'),
    ('spell', 'Spell'),
    ('environment', 'Environment'),
)
