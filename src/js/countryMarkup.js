export function countryMarkup(countryData) {
  return countryData
    .map(({ flags, name, capital, population, languages }) => {
      return `
  <div class="country__container">
  <img class="country__flag" src="${flags.svg}" alt="flag" width="300px">
  <p class="country__name">${name.official}</p>
  </div>
   <ul class="country__description">
  <li class="country__item">&#127988 Capital:
  <span class="country__span">${capital}</span>
  </li>
   <li class="country__item">&#128106 Population:
  <span class="country__span">${population}</span>
  </li>
   <li class="country__item">&#128172 Languages:
  <span class="country__span">${Object.values(languages).join(', ')}</span>
  
  </ul>`;
    })
    .join('');
}
