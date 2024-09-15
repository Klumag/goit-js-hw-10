import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { countryMarkup } from './js/countryMarkup';
import { countryListMarkup } from './js/countryListMarkup';
import { removeMarkup } from './js/removeMarkup';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search__box'),
  countryList: document.querySelector('.country__list'),
  countryInfo: document.querySelector('.country__info'),
};

refs.input.addEventListener('input', debounce(getCountryData, DEBOUNCE_DELAY));

function getCountryData(event) {
  const countryName = event.target.value.trim();
  if (!countryName) {
    removeMarkup(refs.countryList);
    removeMarkup(refs.countryInfo);
    return;
  }

  fetchCountries(countryName)
    .then(data => {
      if (data.length > 10) {
        removeMarkup(refs.countryList);
        removeMarkup(refs.countryInfo);
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return data;
      }
      if (data.length >= 2 && data.length <= 10) {
        removeMarkup(refs.countryInfo);
        removeMarkup(refs.countryList);
        refs.countryList.insertAdjacentHTML(
          'beforeend',
          countryListMarkup(data)
        );
        countryListMarkup(data);
        return data;
      } else {
        removeMarkup(refs.countryInfo);
        removeMarkup(refs.countryList);
        refs.countryInfo.insertAdjacentHTML('beforeend', countryMarkup(data));
        countryMarkup(data);
        return data;
      }
    })
    .catch(err => {
      removeMarkup(refs.countryList);
      removeMarkup(refs.countryInfo);
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
