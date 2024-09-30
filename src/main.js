import { fetchImages, PER_PAGE } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import axios from 'axios';
import SimpleLightbox from "simplelightbox";


const searchForm = document.querySelector('.search-form');
// const loaderEl = document.querySelector('.loader'); 
const imagesBoxEl = document.querySelector('.gallery');
const loadMore = document.querySelector('.js-load-more');
const messageBox = document.querySelector('.message');

let currentPage = 1;
let query = null;
let pages = 0;

// подія форми

searchForm.addEventListener('submit', handleSubmit);
loadMore.addEventListener('click', handleLoadMore);
   
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});  

async function handleSubmit(event) {
    event.preventDefault();

     const form = event.currentTarget;
    query = form.elements.query.value.trim(); 
 
    if (!query) {
        return;
    }

     currentPage = 1;

    try {
        const response = await fetchImages(query, currentPage);
        pages = Math.ceil(response.totalHits / PER_PAGE);
        console.log('handleSubmit:', response);

         if (response.totalHits === 0) {
            showMessage("Sorry, there are no images matching your search query. Please try again!");
            imagesBoxEl.innerHTML = '';
            loadMore.classList.add('is-hidden');
            return;
        }

        const imagesMarkup = renderImages(response.hits);
        imagesBoxEl.innerHTML = imagesMarkup;

        gallery.refresh();

         if (response.totalHits > currentPage * PER_PAGE) {
             loadMore.classList.remove('is-hidden'); // Показ. кнопку
         } else {
    loadMore.classList.add('is-hidden'); // Хов. кнопку
}

        // LoadMore.classList.remove('is-hidden'); 
        
    } catch (error) {
        console.error('Error:', error);

    } finally {
        form.reset();
    }
}

async function handleLoadMore() {
    currentPage += 1;
    console.log(pages);
    try {
       
         const response = await fetchImages(query, currentPage);
        console.log('handleLoadMore:', response);

         if (response.totalHits === 0) {
            showMessage("Sorry, there are no images matching your search query. Please try again!");
            return;
        }

const imagesMarkup = renderImages(response.hits);
        imagesBoxEl.insertAdjacentHTML('beforeend', imagesMarkup);
        // imagesBoxEl.innerHTML = imagesMarkup;

          gallery.refresh();

        handleScrollView();
        
        if (currentPage >= pages) {
            loadMore.classList.add('is-hidden');
            console.log("We're sorry, but you've reached the end of search results.");
        }
    } catch (error) {
         console.error('Error:', error);
     }
}

// показати повідомлення при 0 результаті
function showMessage(message) {
    messageBox.textContent = message;
    messageBox.classList.remove('is-hidden'); // Показ. повідомлення

    // Сховати повідомлення
    setTimeout(() => {
        messageBox.classList.add('is-hidden'); 
    }, 3000);
}
 
// Скрол після завантаження партії картинок
function handleScrollView() {
    const lastArticle = imagesBoxEl.lastElementChild;
    if (lastArticle) {
        const articleHeight = lastArticle.getBoundingClientRect().height;
        window.scrollBy({
            top: articleHeight * 2,
            left: 0,
            behavior: 'smooth',
        });
    } else {
        console.error('Were sorry, but you have reached the end of search results.');
    }
}