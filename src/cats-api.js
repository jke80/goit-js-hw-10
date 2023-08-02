const API_KEY =
  'live_AmCgmr4wWhxqcfZ1vI08fed7gUEeaUtmjvQEW8kH7YDtK22PVvZzkZBGbEks1d9V';
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = API_KEY;

const URL_BREEDS = 'https://api.thecatapi.com/v1/breeds';
const URL_SEARCH = 'https://api.thecatapi.com/v1/images/search';

export function fetchBreeds() {
  const options = axios.defaults.headers.common;
  return fetch(URL_BREEDS, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(Response.status);
      }

      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log('Catch: ', err);
    });
}

export function fetchCatByBreed(breedId) {}
