import csv


def default_components():
    return ['V', 'S', 'M']


def parse_spell(row):
    spell = dict(
        name=row[3],
        desc=row[4],
        requires_concentration=row[5] == 't',
        casting_time=row[6],
        components=row[7],
        components_desc=[x for x in default_components() if x in row[8]],
        level=int(row[9]),
        spell_range=row[10],
        duration=row[12]
    )
    school_id = row[11]
    return (spell, school_id)


def copy_spells(spell_cls):
    schools = get_schools()
    with open('~/spell.csv') as p:
        for line in csv.reader(p):
            if line[0] == 'id':
                continue
            spell, school_id = parse_spell(line)
            spell['school'] = schools[school_id]
            spell_cls.objects.create(**spell)


def get_schools():
    schools = {}
    with open('~/spell-school.csv') as p:
        for line in csv.reader(p):
            if line[0] != '1':
                continue
            schools[line[0]] = line[3]

    return schools
