import React from 'react';
import { Comments, CreatePost, EditProfile, Home, Login, NotFound, Profile, Register, UpdatePost } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './navigation/PrivateRoutes';
import ProtectedRoutes from './navigation/ProtectedRoutes';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/profile" element={<Profile />} />
          <Route path="/comments" element={< Comments/>} />
          <Route path="/create-post" element={< CreatePost/>} />
          <Route path="/edit-profile" element={< EditProfile/>} />
          <Route path="/update-post" element={< UpdatePost/>} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>


        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App