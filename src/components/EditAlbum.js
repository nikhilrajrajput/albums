// components/EditAlbum.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAlbum } from '../redux/actions';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';  // Import toast

const EditAlbum = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const album = useSelector((state) =>
    state.albums.albums.find((album) => album.id === parseInt(id))
  );

  const [title, setTitle] = useState(album ? album.title : '');

  useEffect(() => {
    if (album) setTitle(album.title);
  }, [album]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedAlbum = { userId: album.userId, id: album.id, title };
    dispatch(updateAlbum(album.id, updatedAlbum));
    toast.success('Album updated successfully!');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Album Title"
      />
      <button type="submit">Update Album</button>
    </form>
  );
};

export default EditAlbum;
