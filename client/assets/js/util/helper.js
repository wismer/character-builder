export function merge(race, values, key) {
  var raceValues = race[key];
  for (var val of values) {
    if (!raceValues.includes(val)) {
      raceValues.push(val);
    }
  }

  return raceValues;
}

export class CharBuilder {
  constructor(skills) {
    this.abilities = [
      { short: 'str', long: 'Strength' },
      { short: 'con', long: 'Constitution' },
      { short: 'dex', long: 'Dexterity' },
      { short: 'int', long: 'Intelligence' },
      { short: 'wis', long: 'Wisdom' },
      { short: 'cha', long: 'Charisma' },
      { short: 'any', long: 'Any' }
    ];
    this.playerInfo = [
      { label: 'Character Name', className: 'char-name basic', key: 'charName' },
      { label: 'Player Name', className: 'player-name basic', key: 'playerName' },
      { label: 'Age', className: 'player-age basic', key: 'age' },
      { label: 'Alignment', className: 'player-alignment basic', key: 'alignment' },
    ];

    this.skills = skills;
  }

  populateProps(state) {
    var { abilities, playerInfo, skills } = this,
        abilityScores = [];

    for (var field of playerInfo) {
      if (state[field.key]) {
        field.value = state[field.key];
      } else {
        field.value = `Enter ${field.label}`;
      }
    }

    var modifiers = {};
    for (var [i, ability] of abilities.entries()) {
      ability.score = state.abilityScores[i];
      ability.modifier = modifiers[ability.long.toLowerCase()] = Math.floor((ability.score - 10) / 2);
    }

    for (var [skill, detail] of skills) {
      detail.isProficient = state.trainedSkills.has(skill);
      if (detail.isProficient) {
        detail.modifier = modifiers[detail.ability] + 3;
      } else {
        detail.modifier = modifiers[detail.ability];
      }
    }

    return {
      playerInfo,
      abilities,
      skills,
    }
  }
}