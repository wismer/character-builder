export function classes(classNames) {
  var classes = [];
  for (var key in classNames) {
    var name = classNames[key];
    if (name) classes.push(key);
  }

  return classes.join(' ');
}

export function derivePointCost(currentValue, willIncrease) {
  var n = willIncrease ? 1 : -1;
  return Math.floor(currentValue / 2) + n;
}