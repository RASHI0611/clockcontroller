import './App.css';
import AnanlogClock from '../src/Component/AnanlogClock'
import DigitalClock from '../src/Component/DigitalClock'
import { useState } from 'react';
import Clock from './Component/Clock';

function App() {
  
  
  return (
    <div className="App">
      <div>
      <AnanlogClock />
      {/* <Clock /> */}
      </div>

      
      
    </div>
  );
}

export default App;
