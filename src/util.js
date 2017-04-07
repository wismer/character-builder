export function calcAbilityCost(value, modifier) {
  let n;
  if (value < 13) {
    n = 1;
  } else {
    n = Math.ceil(Math.abs(value - 10) / 2);
  }

  return n * modifier;
}
