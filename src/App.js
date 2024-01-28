import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './features/HomePage';
import Post from './features/post/Post';
import Menu from './features/menu/Menu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Menu />}>
          <Route index element={<Homepage />} />
          <Route path="/post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
