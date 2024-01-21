import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './features/HomePage';
import Post from './features/post/Post';
import Menu from './features/menu/Menu';

const allPosts = [
  {
      title: 'prova 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.',
      id: 0
  },
  {
      title: 'prova 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.',
      id: 1
  },
  {
      title: 'prova 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.',
      id: 2
  },
  {
      title: 'prova 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.',
      id: 3
  },
]

function postSingle(postId){
  const post = postId
  const filtredPost = allPosts.filter(poId => poId.id === post)
  return filtredPost
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Menu />}>
          <Route index element={<Homepage allPosts={allPosts} postSingle={postSingle} />} />
          <Route path="/post" element={<Post postSingle={postSingle} />} />
        </ Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
