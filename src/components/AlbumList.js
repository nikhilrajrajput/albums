// components/AlbumList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums, deleteAlbum } from '../redux/actions';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';  // Import toast
import './AlbumList.css';  // Import CSS

const AlbumList = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums.albums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteAlbum(id));
    toast.success('Album deleted successfully!');
  };

  return (
    <div>
      <h1>Albums</h1>
      {albums.map((album) => (
        <div className="album-container" key={album.id}>
          <h3 className="album-title">{album.title}</h3>
          <p><strong>User ID:</strong> {album.userId}</p>
          <p><strong>ID:</strong> {album.id}</p>
          <div className="button-container">
            <Link to={`/edit-album/${album.id}`}>
              <button className="edit-button">Edit</button>
            </Link>
            <button className="delete-button" onClick={() => handleDelete(album.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
