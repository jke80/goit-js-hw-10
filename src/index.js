import { fetchBreeds, fetchCatByBreed } from './cats-api';
const selectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

selectEl.addEventListener('change', onSelect);

function onSelect(event) {
  if (!errorEl.hidden) {
    errorEl.hidden = true;
  };
  catInfoEl.innerHTML = '';
  loaderEl.hidden = false;
  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId).then(data => {
    catInfoEl.innerHTML = addCatInfo(data[0]);
    loaderEl.hidden = true;
  });
}

fetchBreeds().then(breeds => {
  console.log(breeds);
  selectEl.innerHTML = addBreedsList(breeds);
  loaderEl.hidden = true;
});

function addBreedsList(breeds) {
  return breeds
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function addCatInfo(data) {
  const { url, breeds } = data;
  const { name, description, origin, temperament } = breeds[0];
  return `<img class='cat-info_img' src="${url}" alt="">
  <div class="cat-info_container">
  <h1 class="cat-info_title">${name}</h1>
  <p class="cat-info_text">${description} </p>
  <p class="cat-info_text"> <span class="cat-info_span"> Origin:</span> ${origin}</p>
  <p class="cat-info_temperament_text"><span class="cat-info_span">Temperament: </span>${temperament}</p>
</div>`;
}
