// components/AlbumList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums, deleteAlbum } from '../redux/actions';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';  // Import toast

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
        <div key={album.id}>
          <h3>{album.title}</h3>
          <Link to={`/edit-album/${album.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => handleDelete(album.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
