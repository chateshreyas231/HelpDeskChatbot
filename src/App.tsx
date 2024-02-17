import React from 'react';
import './App.css';
import NavBar from './components/Nav';
import Chatbot from "./components/Chatbot";

import SelectForm from './components/SelectForm';
// import AccountDetails from './components/AccountDetails';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      {/* <div className='left'>       */}
        <div className='form'> <SelectForm/></div>
       {/* </div> */}
      {/* <div/>
      <div className='right'> */}
      
      <div className='chatbot'><h1>Pounce Chat</h1><Chatbot/></div>
      </div>

    // </div>
  );
}

export default App;
