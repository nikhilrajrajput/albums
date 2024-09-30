// components/AddAlbum.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAlbum } from '../redux/actions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './AddAlbum.css';

const AddAlbum = () => {
  const [userId, setUserId] = useState(1); // Default userId
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlbum = { userId, id: Date.now(), title };
    dispatch(addAlbum(newAlbum));
    toast.success('Album added successfully!');
    setTitle('');
    navigate('/'); // Redirect to album list
  };

  return (
    <form onSubmit={handleSubmit} className="add-album-form">
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
          value={Date.now()} // Display the generated ID as text
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
      <button type="submit">Add Album</button>
    </form>
  );
};

export default AddAlbum;
