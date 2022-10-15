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

      <div className='digitalclock' style={{background:'grey',borderRadius:'50%',
      padding:'40px',marginLeft:'70vh',marginRight:'70vh',
      textAlign:'left',marginTop:'-20%'}}>
      <DigitalClock />
      </div>
      
    </div>
  );
}

export default App;
