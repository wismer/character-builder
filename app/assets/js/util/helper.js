export function merge(race, values, key) {
  var raceValues = race[key];
  for (var val of values) {
    if (!raceValues.includes(val)) {
      raceValues.push(val);
    }
  }

  return raceValues;
}