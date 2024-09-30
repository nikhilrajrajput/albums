// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AlbumList from './components/AlbumList';
import AddAlbum from './components/AddAlbum';
import EditAlbum from './components/EditAlbum';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<AlbumList />} />
        <Route path="/add-album" element={<AddAlbum />} />
        <Route path="/edit-album/:id" element={<EditAlbum />} />
      </Routes>
    </Router>
  );
};

export default App;
