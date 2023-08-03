import { fetchBreeds, fetchCatByBreed } from './cats-api';
let breedsArr = [];
const selectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');

selectEl.addEventListener('change', onSelect);

function onSelect(event) {
  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId).then(data => {
    catInfoEl.innerHTML = addCatPhoto(data[0]);
  });
  addCatInfo(breedId);
}

fetchBreeds().then(breeds => {
  console.log(breeds);
  breedsArr = breeds;
  selectEl.innerHTML = addBreedsList(breedsArr);
});

function addBreedsList(breeds) {
  return breeds
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function breedById(breedId) {
  return breedsArr.find(breed => breed.id === breedId);
}

function addCatInfo(breedId) {
  const { name, description, origin, temperament } = breedById(breedId);
  console.log(name, description, origin, temperament);

  return 
}

function addCatPhoto(data) {
  return `<img class='cat-info_img' src="${data.url}" alt="">
  <div>
      <h1> Breeds </h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    </div>`;
}
