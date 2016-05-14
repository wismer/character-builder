DWARF_WEAPONS = ['warhammer', 'throwing hammer', 'handaxe', 'battleaxe']
ELVEN_WEAPONS = ['shortbow', 'longbow', 'shortsword', 'longsword']


class BaseRace(object):
    languages = ['Common']
    advantage = []
    subraces = []
    weapons = []
    speed = 30
    hp = 0
    darkvision = False
    enhanced_darkvision = False
    resists = []
    abilities = []
    advantage = []
    armor = []
    weapons = []

    def __init__(self, **kwargs):
        self.attributes = {attr: 0 for attr in ['str', 'dex', 'con', 'int', 'wis', 'cha']}
        # self.resists = []
        # self.abilities = []
        # self.advantage = []
        # self.subraces = []
        # self.armor = []
        # self.languages = []
        # self.weapons = []
        # self.speed = 30
        # self.hp = 0
        # self.darkvision = False
        # self.enhanced_darkvision = False


class Race(BaseRace):
    def __init__(self, **kwargs):
        if not kwargs.get('parent'):
            super().__init__(**kwargs)
        self.name = kwargs.pop('name')
        ref = kwargs.get('parent', self)
        for field, val in kwargs.items():
            try:
                attribute_value = getattr(ref, field)
            except AttributeError:
                return
            if type(attribute_value) == int or type(attribute_value) == list:
                setattr(self, field, attribute_value + val)
            elif type(attribute_value) == bool:
                setattr(self, field, val)
            elif type(attribute_value) == dict:
                updated_dict = {attr: v + kwargs[field].get(attr, 0) for attr, v in attribute_value.items()}
                setattr(self, field, updated_dict)

    def subrace(self, **kwargs):
        self.subraces.append(Race(parent=self, **kwargs))
        return self


PRIMARY_RACES = {
    'Dwarf': Race(
        name='Dwarf',
        weapons=DWARF_WEAPONS,
        attributes={'con': 2},
        darkvision=True,
        languages=['Dwarven'],
        resists=['poison'],
        advantage=['poison'],
        speed=-5
    ).subrace(
        name='Mountain Dwarf',
        attributes={'str': 2},
        armor=['light', 'medium']
    ).subrace(
        name='Hill Dwarf',
        attributes={'wis': 1},
        abilities=['Dwarven Toughness']
    ),

    'Elf': Race(
        name='Elf',
        weapons=['shortsword'],
        attributes={'dex': 2},
        darkvision=True,
        languages=['Elven'],
        advantage=['charm'],
        resists=['charm'],
    ).subrace(
        name='Wood Elf',
        weapons=['longsword', 'shortbow', 'longbow'],
        abilities=['Mask of the Wild'],
    ).subrace(
        name='High Elf',
        weapons=['longsword', 'shortbow', 'longbow'],
        spells=[1,0,0,0,0,0,0,0,0,0],
    )
}


# DWARF = Race(name='Dwarf', attrs=[('con', 2)], vision='Darkvision', resist=['poison'], advantage=['poison'])



# base_attrs = ['con', 'wis', 'int', 'dex', 'cha', 'str']
#
# DWARF_WEAPONS = ['warhammer', 'throwing hammer', 'handaxe', 'battleaxe']
# ELF_WEAPONS = ['shortbow', 'longbow', 'shortsword', 'longsword']
#
# RACES = {}
#
# class Race(object):
#     def __init__(self, name, **kwargs):
#         self.attrs = attributes()
#         self.langs = ['Common']
#
#
# class ParentRace(Race):
#     def __init__(self, name, **kwargs):
#         super().__init__(name, **kwargs)
#
#
#
# class SubRace(Race):
#     pass
#
# class attributes(dict):
#     def __init__(self, **kwargs):
#         for attr in base_attrs:
#             self[attr] = kwargs.get(attr, 0)
#
#     def __call__(self, **kwargs):
#         for attr, val in kwargs.items():
#             self[attr] += kwargs[attr]
#         return self
#
#     def __add__(self, other):
#         for field, val in other.items():
#             self[field] += val
#         return self
#
#     def as_modifier(self):
#         return {attr: (val - 10) // 2 for attr, val in self.items()}
#
# RACES['Dwarf'] = dict(
#     name='Dwarf',
#     attrs=attributes(con=2),
#     perks=['Stonecutting'],
#     resists=['poison'],
#     advantage=['poison']
# )
#
# RACES['Dwarf']['subraces'] = [
#     dict(
#         name='Mountain Dwarf',
#         attrs=RACES['Dwarf']['attrs'](str=2),
#         armor=RACES['Dwarf']['armor'] + ['heavy'],
#         weapons=DWARF_WEAPONS,
#
#
#     )
# ]
#
# def merge(parent=None, **race):
#     default = parent if parent else deepcopy(attr_defaults)
#     if parent:
#         print(parent)
#     for field, value in race.items():
#         if type(value) == str and len(default[field]) > 0:
#             default[field] = '{0} {1}'.format(value, default[field])
#         else:
#             default[field] += value
#     return default
#
#
# class race(dict):
#     def __init__(self, parent=None, **kwargs):
#         for field, value in merge(parent=parent, **kwargs).items():
#             self[field] = value
#
#     def add_subraces(self, *subraces):
#         self['subraces'] = [race(parent=self, **subrace) for subrace in subraces]
#         return self
#
#
# class trait(set):
#     def __add__(self, other):
#         for item in other:
#             self.add(item)
#         return self
#
#
#
#
# attr_defaults = {
#     'langs': trait(['Common']),
#     'vision': '',
#     'armor': trait(),
#     'perks': trait(),
#     'weapons': trait(),
#     'resists': trait(),
#     'attrs': attributes(),
#     'advantage': trait(),
#     'subraces': trait(),
#     'name': ''
# }

#
# RACES = [
#     race(
#         name='Dwarf',
#         armor=['light', 'medium'],
#         langs=['Dwarven'],
#         weapons=['battleaxe', 'handaxe', 'warhammer', 'throwing hammer'],
#         resists=['poison'],
#         advantage=['poison'],
#         perks=['Stonecutting'],
#         attrs={'con': 2}
#     ).add_subraces(
#         dict(name='Mountain', armor=['heavy'], attrs={'str': 2}),
#         dict(name='Hill', attrs={'wis': 1}, perks=['Dwarven Resilience'])
#     )
# ]

#
# class RaceProperty(object):
#     def __init__(self, name, vision=None, langs=[], armor=[], traits=[], weapons=[], resists=[], advantage=[], attrs={}):
#         self.name = name
#         self.vision = vision
#         self.langs = ['Common'] + langs
#         self.armor = armor
#         self.traits = traits
#         self.weapons = weapons
#         self.attrs = {attr: attrs.get(attr, 0) + val for attr, val in attributes.items()}
#
#     def add_subraces(self, *subraces):
#         for subrace in subraces:
#             subrace.attrs = {attr: self.attrs[attr] + val for attr, val in subrace.attrs.items()}
#             subrace.armor = self.armor + subrace.armor
#             subrace.langs = self.langs + subrace.langs
#             subrace.vision = self.vision
#             subrace.name = '{1} {0}'.format(self.name, subrace.name)
#             subrace.traits = self.traits + subrace.traits
#             subrace.weapons = self.weapons + subrace.weapons
#
#         self.subraces = subraces
#

# dwarf = RaceProperty('Dwarf', attrs={'con': 2}, vision='Darkvision', traits=['Stonecutting', ])
# elf = RaceProperty('Elf')
# tiefling = RaceProperty('Tiefling')
# half_orc = RaceProperty('Half-Orc')
# half_elf = RaceProperty('Half-Elf')
# halfling = RaceProperty('Halfling')
# gnome = RaceProperty('Gnome')
# human = RaceProperty('Human')
#
# dwarf.add_subraces(
#     RaceProperty('Hill', attrs={'wis': 1}, traits=['HP +1 per level']),
#     RaceProperty('Mountain', attrs={'str': 2}, armor=['heavy'])
# )
