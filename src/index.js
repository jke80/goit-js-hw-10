import SlimSelect from 'slim-select';


import { fetchBreeds, fetchCatByBreed } from './cats-api';
import { addCatInfo, addBreedsList } from './create-murkup';
import "slim-select/dist/slimselect.css";


const refs = {
  selectEl: document.querySelector('.breed-select'),
  catInfoEl: document.querySelector('.cat-info'),
  loaderEl: document.querySelector('.loader'),
  errorEl: document.querySelector('.error'),
};

fetchBreeds().then(breeds => {
  console.log(breeds);
  refs.selectEl.innerHTML = addBreedsList(breeds);
  refs.loaderEl.hidden = true;
  
  new SlimSelect({
    select: '.breed-select',
    settings: {
      placeholderText: 'select breed',
    }
  });    
});

refs.selectEl.addEventListener('change', onSelect);

function onSelect(event) {
  if (!refs.errorEl.hidden) {
    refs.errorEl.hidden = true;
  }
  refs.catInfoEl.innerHTML = '';
  refs.loaderEl.hidden = false;

  fetchCatByBreed(event.currentTarget.value).then(data => {
    refs.catInfoEl.innerHTML = addCatInfo(data[0]);
    refs.loaderEl.hidden = true;
  });
}



//----------------------------------------------------------------------
// import { fetchBreeds, fetchCatByBreed } from './cats-api';
// import { addCatInfo, addBreedsList } from './create-murkup';

// const refs = {
//   selectEl: document.querySelector('.breed-select'),
//   catInfoEl: document.querySelector('.cat-info'),
//   loaderEl: document.querySelector('.loader'),
//   errorEl: document.querySelector('.error'),
// };

// refs.selectEl.addEventListener('change', onSelect);

// function onSelect(event) {
//   if (!refs.errorEl.hidden) {
//     refs.errorEl.hidden = true;
//   }
//   refs.catInfoEl.innerHTML = '';
//   refs.loaderEl.hidden = false;

//   fetchCatByBreed(event.currentTarget.value).then(data => {
//     refs.catInfoEl.innerHTML = addCatInfo(data[0]);
//     refs.loaderEl.hidden = true;
//   });
// }

// fetchBreeds().then(breeds => {
//   refs.selectEl.innerHTML = addBreedsList(breeds);
//   refs.loaderEl.hidden = true;
// });
//---------------------------------------------------------------------
