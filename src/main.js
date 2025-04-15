import { getImagesByQuery } from './js/pixabay-api';
import * as gallery from './js/render-functions';

export const form = document.querySelector('.form');
const input = document.querySelector('[name="search-text"]');

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  if (!input.value.trim()) {
    form.reset();
    gallery.clearGallery();
    return;
  }
  getImagesByQuery(input.value.trim());
  form.reset();
}
