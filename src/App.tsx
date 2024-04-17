import React from 'react';
import './CSS/App.css';
// import './CSS/Reset.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Domestic from './pages/Domestic';
import Overseas from './pages/Overseas';
import NotFounded from './pages/NotFounded';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import FindPassword from './pages/FindPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/domestic" element={<Domestic />} />
          <Route path="/overseas" element={<Overseas />} />
          <Route path="/404" element={<NotFounded />} />
          <Route path="/login" element={<Login />} />
          <Route path="/findPassword" element={<FindPassword />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
