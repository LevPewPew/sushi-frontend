import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Section from '../components/Section';

function App() {
  return (
    <div className="App">
      <h1>Sushi</h1>
      <div>
        <Section />
      </div>
    </div>
  );
}

export default App;
