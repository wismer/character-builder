import * as actions from './actions';
import { calcAbilityCost, tallyRefund, calcModifierBonus } from '../util';

const initialState = {
  racesById: {},
  races: [],

  skillsById: {},
  skills: [],

  abilityScoresByName: {},
  abilityScores: [],

  armorById: {},
  armor: [],

  classById: {},
  classes: [],

  activeRace: null,
  activeSubRace: null,

  weapons: [],
  weaponsById: {}
};


/*
  Reducers for Selecting a Race

  TODO:
  split out the reducers
  figure out how exactly the state should resemble.
  ~past self~
*/

function replaceSubClass(prevState, action) {
  return Object.assign({}, prevState, { activeSubClass: action.activeSubClass });
}

function addSkill(prevState, skill) {
  let {trainedSkills} = prevState;

  if (trainedSkills.find(s => s.name === skill.name)) {
    trainedSkills = trainedSkills.filter(s => s.name !== skill.name);
  } else {
    trainedSkills = [...trainedSkills, skill];
  }

  return Object.assign({}, prevState, { trainedSkills });
}

function alterAbilityScore(prevState, {ability, modifier}) {
  const value = calcAbilityCost(ability.value + modifier, modifier);
  let { abilityPointsRemaining, abilityScoresById } = prevState;
  abilityPointsRemaining -= value;

  if (abilityPointsRemaining < 0 || abilityPointsRemaining > 27) {
    return prevState;
  } else if (ability.value + modifier < ability.min) {
    return prevState;
  }

  ability.value += modifier;
  abilityScoresById[ability.name] = ability;

  return Object.assign({}, prevState, {
    abilityPointsRemaining,
    abilityScoresById
  });
}

function resetAbilities(prevState, ability) {
  let {abilityScoresById, abilityScores, abilityPointsRemaining} = prevState;
  let diff = 0;
  if (ability) {
    diff = tallyRefund(ability.value, ability.min);
    ability.value = ability.min;
    abilityScoresById[ability.name] = ability;
  } else {
    abilityScores.forEach(score => {
      let ability = abilityScoresById[score];
      diff += ability.value - ability.min;
      ability.value = ability.min;
    });
  }

  abilityPointsRemaining += diff;

  return Object.assign({}, prevState, {
    abilityScoresById,
    abilityPointsRemaining
  });
}

function splitFieldFromValue(state, field, values) {
  const byId = {};
  for (var value of values) {
    byId[value.id || value.name] = value;
  }

  return Object.assign({}, state, {
    [`${field}ById`]: byId,
    [`${field}`]: values.map(v => v.id || v.name)
  });
}

function initialSetup(state, payload) {
  for (let key of Object.keys(payload)) {
    state = splitFieldFromValue(state, key, payload[key]);
  }

  const activeRace = state.racesById[state.races[1]];
  const activeSubRace = activeRace.subraces[0];
  const activeClass = state.classesById[state.classes[0]];
  const activeSubClass = activeClass.subclasses[0];
  const abilities = activeRace.ability_scores.slice();

  abilities.forEach(a => {
    a.name = a.name.toLowerCase();
    a.name === 'any' ? null : a.value += 8;
    a.min = a.value;
  });

  state = splitFieldFromValue(state, 'abilityScores', abilities);

  return Object.assign({}, state, {
    activeRace,
    activeSubRace,
    activeClass,
    activeSubClass,
    abilityPointsRemaining: 27
  });
}

function changeRace(prevState, action) {
  if (!prevState) {
    return initialState;
  }
  const { raceType, activeIdx } = action;
  const { races, activeRace } = prevState;
  const newState = {};

  if (raceType === 'parent') {
    newState.activeRace = races[activeIdx];
    newState.activeSubRace = newState.activeRace.subraces[0];
  } else {
    newState.activeSubRace = activeRace.subraces[activeIdx];
  }
  return Object.assign({}, prevState, newState);
}

function trainSkill(prevState, id) {
  let { skillsById } = prevState;
  let skill = skillsById[id];
  skill.is_proficient = !skill.is_proficient;

  return Object.assign({}, prevState, { skillsById });
}

export function characterCreation(state, action) {

  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case 'SETUP':
      delete action.type;
      return initialSetup(state, action);
    case 'CHANGE_RACE':
      return changeRace(state, action);
    case 'SELECT_SUBCLASS':
    case 'PREVIEW_SUBCLASS':
      return replaceSubClass(state, action);
    case 'ADD_SKILL':
      return addSkill(state, action.skill);
    case 'ABILITY_CHANGE':
      return alterAbilityScore(state, action);
    case 'RESET_ABILITIES':
      return resetAbilities(state, action.ability);
    case 'TOGGLE_SKILL':
      return trainSkill(state, action.id);
    default: return state;
  }
}

export function dispatchActiveRace(dispatch) {
  return {
    onRaceSelect: (name) => {
      dispatch(actions.toggleActiveRace(name));
    }
  };
}

function copyAbilities(parent, child) {
  let newScores = [];
  parent.forEach((score, idx) => {
    let childScore = child[idx];
    let value = score.value + childScore.value;
    if (value > 0) {
      let copy = Object.assign({}, score, { value: score.value + childScore.value });
      newScores.push(copy);
    }
  });
  return newScores;
}

function mergeAbilityScores(parent, child) {
  if (!child) {
    return parent.ability_scores.filter(score => score.value > 0);
  }

  return copyAbilities(parent.ability_scores, child.ability_scores);
}

function mergeItems(parent, child) {
  if (!child) {
    return { weapons: [], armor: [] };
  } else {
    return { weapons: child.weapons, armor: child.armor };
  }
}

export function raceSelectionProps(characterCreation) {
  const { activeRace, activeSubRace, races, racesById } = characterCreation;
  const { weapons, armor } = mergeItems(activeRace, activeSubRace);
  return {
    races: races.map(id => racesById[id]),
    racesById,
    activeRace,
    activeSubRace,
    abilityScores: mergeAbilityScores(activeRace, activeSubRace),
    weapons,
    armor
  };
}

export function classSelectProps(characterCreation) {
  let { activeClass, activeSubClass, classes } = characterCreation;
  return { classes, activeClass, activeSubClass, subclasses: activeClass };
}

export function characterCreateProps(prevState, props) {
  return props;
}

export function subClassDispatch(dispatch) {
  return {
    onMouseOver: (subclass) => {
      dispatch(actions.previewSubClass(subclass));
    },

    onMouseClick: (subclass) => {
      dispatch(actions.selectSubClass(subclass));
    },

    addSkill: (skill) => {
      dispatch(actions.addSkill(skill));
    }
  };
}

export function slideSelectRaceDispatch(dispatch) {
  return {
    shiftLeft: (type, idx) => {
      dispatch(actions.slideLeft(type, idx));
    },

    shiftRight: (type, idx) => {
      dispatch(actions.slideRight(type, idx));
    }
  };
}

export function abilitySelectProps(characterCreation) {
  const {
    abilityPointsRemaining,
    abilityScores,
    abilityScoresById,
    skills,
    skillsById
  } = characterCreation;
  return {
    abilityPointsRemaining,
    abilities: abilityScores.map(name => abilityScoresById[name]),
    skills: skills.map(skill => {
      skill = skillsById[skill];
      let relatedAbility = abilityScoresById[skill.ability];
      skill.modifier = calcModifierBonus(relatedAbility.value, skill.is_proficient);
      return skill;
    })
  };
}

export function abilitySelectDispatch(dispatch) {
  return {
    onAbilitySelect: (ability, modifier) => {
      dispatch(actions.abilityChange(ability, modifier));
    },

    resetAbilities: ability => {
      dispatch(actions.resetAbilities(ability));
    },

    toggleSkillTraining: skill => {
      dispatch(actions.toggleSkillTraining(skill));
    }
  };
}
