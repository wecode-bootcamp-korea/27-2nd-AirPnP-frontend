import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import ListPage from './pages/ListPage/ListPage';
import HostDetail from './pages/HostDetail/HostDetail';
import HostRegister from './pages/HostRegister/HostRegister';
import Signup from './pages/Signup/Signup';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail" element={<HostDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/host-register" element={<HostRegister />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
