
const DEBUG = true; // for now
const URL = DEBUG ? 'http://localhost:8000' : 'http://example.com';


export function retrieve(path, succ, fail) {
  fetch(`${URL}/${path}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }).then(response => {
    response.json().then(succ, fail);
  });
}

export function save(path, body, succ, fail) {
  fetch(`${URL}/${path}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    body: body
  }).then(response => {
    // handle response
    response.json().then(succ, fail);
  })
}