// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlbumList from './components/AlbumList';
import AddAlbum from './components/AddAlbum';
import EditAlbum from './components/EditAlbum';  // New EditAlbum component
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';  // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';   // Import toastify CSS

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />  {/* Toast container for notifications */}
      <Routes>
        <Route path="/" element={<AlbumList />} />
        <Route path="/add-album" element={<AddAlbum />} />
        <Route path="/edit-album/:id" element={<EditAlbum />} /> {/* New edit route */}
      </Routes>
    </Router>
  );
};

export default App;
