

import React, {} from "react";
import HeaderContent from './components/HeaderContent';
import BodyContent from './components/BodyContent';
import "./App.css";

function App() {
    return (
      <div className = 'resumeArea'>
      <p className='resumeLabel'>Junior Developer Resume Template (No experience)</p>
        <div className = 'headerArea'></div>
          <HeaderContent/>
        <div className = 'bodyArea'></div>
          <BodyContent/>
      </div>
    );
}


export default App;

