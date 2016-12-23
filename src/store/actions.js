export function slideLeft(raceType, activeIdx) {
  return {
    type: 'SLIDE_RIGHT',
    activeIdx,
    raceType
  };
}

export function slideRight(raceType, activeIdx) {
  return {
    type: 'SLIDE_RIGHT',
    activeIdx,
    raceType
  };
}

export function selectSubClass(subclass) {
  return {
    type: 'SELECT_SUBCLASS',
    activeSubClass: subclass
  }
}

export function previewSubClass(subclass) {
  return {
    type: 'PREVIEW_SUBCLASS',
    activeSubClass: subclass
  };
}

export function addSkill(skill) {
  return {
    type: 'ADD_SKILL',
    skill
  };
}

export function abilityChange(ability, modifier) {
  return {
    type: 'ABILITY_CHANGE',
    ability,
    modifier
  };
}
