import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import * as gallery from './render-functions';

export function getImagesByQuery(query) {
  gallery.showLoader();
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '49740043-bed2939fa2e4edbb3e5f2f338',
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
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
}
