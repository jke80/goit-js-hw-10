import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.js';
import axios from 'axios';

const API_KEY =
  'live_AmCgmr4wWhxqcfZ1vI08fed7gUEeaUtmjvQEW8kH7YDtK22PVvZzkZBGbEks1d9V';

axios.defaults.headers.common['x-api-key'] = API_KEY;

const URL_BREEDS = 'https://api.thecatapi.com/v1/breeds';
const URL_SEARCH = 'https://api.thecatapi.com/v1/images/search';

// const errorEl = document.querySelector('.error');
// errorEl.hidden = true;

export function fetchBreeds() {
  return axios
    .get(URL_BREEDS)
    .then(response => response.data)
    .catch(() => {
      Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
      // errorEl.hidden = false;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${URL_SEARCH}?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(() => {
      Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
      // errorEl.hidden = false;
    });
}

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import 'notiflix/dist/notiflix-3.2.6.min.js';

// const API_KEY =
//   'live_AmCgmr4wWhxqcfZ1vI08fed7gUEeaUtmjvQEW8kH7YDtK22PVvZzkZBGbEks1d9V';
// // import axios from 'axios';

// // axios.defaults.headers.common['x-api-key'] = API_KEY;

// const URL_BREEDS = 'https://api.thecatapi.com/v1/breeds';
// const URL_SEARCH = 'https://api.thecatapi.com/v1/images/search';

// const errorEl = document.querySelector('.error');
// errorEl.hidden = true;

// export function fetchBreeds() {
//   return fetch(URL_BREEDS, {
//     headers: {
//       'x-api-key': API_KEY,
//     },
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(Response.status);
//       }
//       return response.json();
//     })
//     .catch(err => {
//       Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
//       // errorEl.hidden = false;
//     });
// }

// export function fetchCatByBreed(breedId) {
//   return fetch(`${URL_SEARCH}?breed_ids=${breedId}`, {
//     headers: {
//       'x-api-key': API_KEY,
//     },
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(Response.status);
//       }
//       return response.json();
//     })
//     .catch(err => {
//       Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
//       // errorEl.hidden = false;
//     });
// }
