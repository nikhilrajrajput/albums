// redux/reducer.js
const initialState = {
    albums: [],
  };
  
  export const albumReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ALBUMS':
        return { ...state, albums: action.payload };
  
      case 'ADD_ALBUM':
        return { ...state, albums: [...state.albums, action.payload] };
  
      case 'UPDATE_ALBUM':
        return {
          ...state,
          albums: state.albums.map(album =>
            album.id === action.payload.id ? action.payload : album
          ),
        };
  
      case 'DELETE_ALBUM':
        return {
          ...state,
          albums: state.albums.filter(album => album.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  