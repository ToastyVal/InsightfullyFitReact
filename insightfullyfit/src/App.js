import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import HRmax from './components/HRmax';
import BMR from './components/BMR';







function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <Login />
      <Register />
      <HRmax />
      <BMR />
    </div>
  );
}

export default App;
