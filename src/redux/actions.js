// redux/actions.js
import axios from 'axios';

// Action Types
const FETCH_ALBUMS = 'FETCH_ALBUMS';
const ADD_ALBUM = 'ADD_ALBUM';
const UPDATE_ALBUM = 'UPDATE_ALBUM';
const DELETE_ALBUM = 'DELETE_ALBUM';

// Action Creators
export const fetchAlbums = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
  dispatch({ type: FETCH_ALBUMS, payload: response.data });
};

export const addAlbum = (album) => async (dispatch) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/albums', album);
  dispatch({ type: ADD_ALBUM, payload: response.data });
};

export const updateAlbum = (id, updatedAlbum) => async (dispatch) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`, updatedAlbum);
  dispatch({ type: UPDATE_ALBUM, payload: response.data });
};

export const deleteAlbum = (id) => async (dispatch) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  dispatch({ type: DELETE_ALBUM, payload: id });
};
