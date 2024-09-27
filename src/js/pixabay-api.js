import axios from 'axios';

export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '46110623-cffeede45492ee1adb33fe3c4';
export const PER_PAGE = 6;

export async function fetchImages(query, currentPage = 1) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: currentPage,
        per_page: PER_PAGE,

    });

    const url = `${BASE_URL}?${params}`;

    try {
        const data = await axios.get(url);
        console.log('fetchImages data:', data.data);
        return data.data;
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}
    

