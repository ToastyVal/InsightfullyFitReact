import React from 'react';
import './App.css';
import BMR from './components/BMR';
import HRmax from './HRmax';
import TDEE from './TDEE';







function App() {
  return (
    <div>
      <h1>Welcome</h1>,
      <BMR />
      <HRmax />
      <TDEE />
    </div>
  );
}

export default App;
