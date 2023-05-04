import React from 'react';
import './stylesheet/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Pages/Login';
import RegisterForm from './Pages/Register';
import UserSpace from './Pages/UserSpace';
import Details from './Pages/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/details" element={<Details/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/user" element={<UserSpace/>}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </Router>
  )
}

export default App
