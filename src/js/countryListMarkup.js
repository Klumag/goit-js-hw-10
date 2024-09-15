export function countryListMarkup(countryData) {
  return countryData
    .map(({ flags, name }) => {
      return `
    <li class="cards__item">
    <img class="cards__img" src="${flags.svg}" alt="flag">
    <p class="card__text">${name.official}</p>
    </li>
    `;
    })
    .join('');
}
