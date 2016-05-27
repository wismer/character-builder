number_range = [i for i in range(0, 30)]


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
