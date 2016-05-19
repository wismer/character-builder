export function getRaces(succ, fail) {
  fetch('http://localhost:8000/races/', {
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }).then(response => {
    response.json().then(succ, fail)
  }, fail);
}
