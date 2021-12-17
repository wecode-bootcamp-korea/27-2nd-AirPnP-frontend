import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HostRegisterEnd from './HostRegisterEnd/HostRegisterEnd';
import HostRegisterStart from './HostRegisterStart/HostRegisterStart';
import HostRegisterStep from './HostRegisterStep/HostRegisterStep';

const HostRegister = () => {
  return (
    <Routes>
      <Route path="/" element={<HostRegisterStart />} />
      <Route path="/register-process/*" element={<HostRegisterStep />} />
      <Route path="/register-process/complete" element={<HostRegisterEnd />} />
    </Routes>
  );
};

export default HostRegister;
