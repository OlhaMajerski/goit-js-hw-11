import { getImages } from './js/pixabay-api.js';
import { renderImages, showError } from './render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.search-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value.trim();
    if (!query) {
      showError('Please enter a search term.');
      return;
    }
  });
});
