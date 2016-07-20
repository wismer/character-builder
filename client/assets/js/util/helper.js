export function classes(classNames) {
  var classes = [];
  for (var key in classNames) {
    var name = classNames[key];
    if (name) classes.push(key);
  }

  return classes.join(' ');
}

export function derivePointCost(currentValue, willIncrease) {
  return willIncrease ? Math.floor(currentValue / 2) + 1 : Math.ceil(currentValue / 2);
}