import React from 'react';
import './App.css';
import DrawCard from './Deck';
import KeepDrawingCard from './KeepDrawingCard';

function App() {
  return (
    <div className="App">
      <DrawCard />
      <KeepDrawingCard />
    </div>
  );
}

export default App;
