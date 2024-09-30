import axios from 'axios';

// Action Types
export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const ADD_ALBUM = 'ADD_ALBUM';
export const UPDATE_ALBUM = 'UPDATE_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';

// Fetch Albums Action
export const fetchAlbums = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      dispatch({ type: FETCH_ALBUMS, payload: response.data });
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };
};

// Add Album Action
export const addAlbum = (album) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/albums', album);
      dispatch({ type: ADD_ALBUM, payload: response.data });
    } catch (error) {
      console.error('Error adding album:', error);
    }
  };
};

// Update Album Action
export const updateAlbum = (id, updatedAlbum) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`, updatedAlbum);
      dispatch({ type: UPDATE_ALBUM, payload: response.data });
    } catch (error) {
      console.error('Error updating album:', error);
    }
  };
};

// Delete Album Action
export const deleteAlbum = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
      dispatch({ type: DELETE_ALBUM, payload: id });
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };
};
