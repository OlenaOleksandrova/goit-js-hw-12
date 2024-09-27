import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import axios from 'axios';

const searchForm = document.querySelector('.search-form');
// const loaderEl = document.querySelector('.loader'); 
const imagesBoxEl = document.querySelector('.gallery');
const LoadMore = document.querySelector('.js-load-more')
let currentPage = 1;


// подія форми

searchForm.addEventListener('submit', handleSubmit);
// LoadMore.addEventListener('click', handleLoadMore);
   

async function handleSubmit(event) {
    event.preventDefault();

     const form = event.currentTarget;
    const query = form.elements.query.value.trim(); 
 
    if (!query) {
        return;
    }

    try {
       
        const response = await fetchImages(query);
        console.log('handleSubmit:', response);

    
        const imagesMarkup = renderImages(response.hits);
        imagesBoxEl.innerHTML = imagesMarkup;

          if (response.totalHits > currentPage * 6) {
            LoadMore.classList.remove('is-hidden'); // Показуємо кнопку
        } else {
            LoadMore.classList.add('is-hidden'); // Ховаємо кнопку
        }

        // LoadMore.classList.remove('is-hidden'); 
        
    } catch (error) {
        console.error('Error:', error);

    } finally {
        form.reset();
    }
}

