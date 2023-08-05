export function addCatInfo({url, breeds}) {
  const { name, description, origin, temperament } = breeds[0];
  return `<img class='cat-info_img' src="${url}" alt="">
    <div class="cat-info_container">
    <h1 class="cat-info_title">${name}</h1>
    <p class="cat-info_text">${description} </p>
    <p class="cat-info_text"> <span class="cat-info_span"> Origin:</span> ${origin}</p>
    <p class="cat-info_text"><span class="cat-info_span">Temperament: </span>${temperament}</p>
  </div>`;
}

export function addBreedsList(breeds) {
  return `<option data-placeholder="true"></option>`+ breeds
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}
