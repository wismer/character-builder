export function retrieve(path, succ, fail) {
  fetch(`http://localhost:8000/${path}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }).then(response => {
    response.json().then(succ, fail);
  })
}