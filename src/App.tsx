import React from 'react';
import './App.css';

import { InputBox, OutputBox, Score, Title } from './component/common'

function App() {
  return (
    <div className="App">
      <header>
        <Title/>
      </header>
      <InputBox/>
      <OutputBox/>
    </div>
  );
}

export default App;
