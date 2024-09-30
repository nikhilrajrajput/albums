// components/EditAlbum.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateAlbum } from '../redux/actions';
import { toast } from 'react-toastify';
import './EditAlbum.css';

const EditAlbum = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const albums = useSelector((state) => state.albums.albums);
  const album = albums.find((album) => album.id === parseInt(id));

  const [userId, setUserId] = useState(album?.userId || 1);
  const [title, setTitle] = useState(album?.title || '');

  useEffect(() => {
    if (album) {
      setUserId(album.userId);
      setTitle(album.title);
    }
  }, [album]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedAlbum = { userId: parseInt(userId), id: album.id, title };
    dispatch(updateAlbum(album.id, updatedAlbum));
    toast.success('Album updated successfully!');
    navigate('/'); // Redirect to album list
  };

  if (!album) {
    return <div>Album not found.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="edit-album-form">
      <div>
        <label>User ID:</label>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
          required
        />
      </div>
      <div>
        <label>ID:</label>
        <input
          type="text"
          value={album.id} // Display the album ID
          readOnly
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Album Title"
          required
        />
      </div>
      <button type="submit">Update Album</button>
    </form>
  );
};

export default EditAlbum;
