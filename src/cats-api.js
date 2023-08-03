const API_KEY =
  'live_AmCgmr4wWhxqcfZ1vI08fed7gUEeaUtmjvQEW8kH7YDtK22PVvZzkZBGbEks1d9V';
// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] = API_KEY;

const URL_BREEDS = 'https://api.thecatapi.com/v1/breeds';
const URL_SEARCH = 'https://api.thecatapi.com/v1/images/search';

export function fetchBreeds() {
  return fetch(URL_BREEDS, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(Response.status);
      }
      return response.json();
    })
    .catch(err => {
      console.log('Catch: ', err);
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${URL_SEARCH}?breed_ids=${breedId}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(response => {
      // console.log(response);
      if (!response.ok) {
        throw new Error(Response.status);
      }
      return response.json();
    })
    .catch(err => {
      console.log('Catch: ', err);
    });
}
