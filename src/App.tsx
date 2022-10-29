import React from 'react';
import './App.css';

import { InputBox, OutputBox, HoverRating, Score, Title } from './component/common'

function App() {
  return (
    <div className="App">
      <header>
        <Title/>
      </header>
      <InputBox/>
      <OutputBox/>

      <HoverRating/>

    </div>
  );
}

export default App;
