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
  getImagesByQuery(input.value.trim())
    .then(response => {
      gallery.clearGallery();
      if (response.data.hits.length === 0) {
        gallery.hideLoader();
        return iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      gallery.createGallery(response.data.hits);
      gallery.hideLoader();
    })
    .catch(error => {
      console.log(error);
    });
  form.reset();
}
