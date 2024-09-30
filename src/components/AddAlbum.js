// components/AddAlbum.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAlbum } from '../redux/actions';
import { toast } from 'react-toastify';  // Import toast

const AddAlbum = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlbum = { userId: 1, title };
    dispatch(addAlbum(newAlbum));
    toast.success('Album added successfully!');
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Album Title"
      />
      <button type="submit">Add Album</button>
    </form>
  );
};

export default AddAlbum;
