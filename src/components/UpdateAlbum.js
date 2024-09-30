import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAlbum } from './actions';

const UpdateAlbum = ({ id, currentTitle }) => {
  const [title, setTitle] = useState(currentTitle);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedAlbum = { userId: 1, id, title };
    dispatch(updateAlbum(id, updatedAlbum));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Update Title"
      />
      <button type="submit">Update Album</button>
    </form>
  );
};

export default UpdateAlbum;
