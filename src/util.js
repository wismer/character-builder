export function calcAbilityCost(value, modifier) {
  let n;
  if (value < 13) {
    n = 1;
  } else {
    n = Math.ceil(Math.abs(value - 10) / 2);
  }

  return n * modifier;
}

export function tallyRefund(start, stop) {
  let refundAmt = 0;
  for (let i = start; i > stop; i--) {
    refundAmt += calcAbilityCost(i - 1, 1);
  }
  return refundAmt;
}

export function calcModifierBonus(value, isProficient = false) {
  let bonus = isProficient ? 2 : 0;
  if (value === 10) {
    return bonus;
  }
  // could probably refactor this with `calcAbilityCost` since there is some
  // very similar logic going on. TODO
  return Math.ceil((value - 10) / 2) + bonus;
}
