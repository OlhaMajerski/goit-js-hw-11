const API_KEY = '44388505-390a672441da303f6d08bc48a'; // Заміни на свій API ключ

export function getImages(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Fetching error: ', error);
      throw error;
    });
}
