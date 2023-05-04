import React from 'react';
import './stylesheet/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Pages/Login';
import RegisterForm from './Pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
      </Routes>
    </Router>
  )
}

export default App
