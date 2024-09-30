import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/albums';

// Fetch Albums
export const fetchAlbums = () => axios.get(API_URL);

// Add Album
export const addAlbum = (album) => axios.post(API_URL, album);

// Update Album
export const updateAlbum = (id, updatedAlbum) => axios.put(`${API_URL}/${id}`, updatedAlbum);

// Delete Album
export const deleteAlbum = (id) => axios.delete(`${API_URL}/${id}`);
