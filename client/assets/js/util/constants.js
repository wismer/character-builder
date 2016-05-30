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

export function convertScore(score, idx) {
  var attr = attributeMap[idx];
  attr.modifier = Math.floor((score - 10) / 2);
  attr.score = score;
  return attr;
}

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

export const raceDetails = [];

export const raceList = [];
