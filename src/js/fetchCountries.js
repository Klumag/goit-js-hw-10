export const BASE_URL = 'https://restcountries.com/v3.1/name';

export const fetchCountries = url => {
  return fetch(
    `${BASE_URL}/${url}?fields=name,capital,population,flags,languages,region`
  ).then(response => {
    if (!response.ok) {
      throw new Error('no data loaded!');
    }
    return response.json();
  });
};
