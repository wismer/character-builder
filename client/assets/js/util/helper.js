export function classes(classNames) {
  var classes = [];
  for (var key in classNames) {
    var name = classNames[key];
    if (name) classes.push(key);
  }

  return classes.join(' ');
}
