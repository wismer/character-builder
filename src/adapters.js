//
// export class JSONAPIAdapter {}
// export class ItemAdapter extends JSONAPIAdapter {}
// export class PlayerAdapter extends JSONAPIAdapter {}
// export class CharacterAdapter extends JSONAPIAdapter {}

import ENV from './config/environment';
import Promise from 'promise';
const { api, accountURL } = ENV;


export function playerEndpoint(method) {
  return new Promise((resolve, reject) => {
    return fetch(`${api}/players/`, { method }).then(players => {
      players.json().then(resolve);
    }, reject);
  });
}

export function getGameInformation() {
  return new Promise((resolve, reject) => {
    fetch(`${api}/api/game/`).then(response => {
      response.json().then(resolve, reject);
    }, reject);
  });
}

export function getCharacterClasses() {
  return new Promise((resolve, reject) => {
    return fetch(`${api}/character-classes`).then(response => {
      response.json().then(resolve, reject);
    }, reject);
  });
}

export function login(email, password) {
  return new Promise((resolve, reject) => {
    const data = {
      data: {
        type: 'users',
        attributes: {
          email, password
        }
      }
    };
    fetch(`${accountURL}/login/`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.api+json'
      }
    }).then(resolve, reject);
  });
}

export function getRaces(success, failure) {
  fetch(`${api}/races/`).then(response => {
    response.json().then(success, failure);
  });
}
