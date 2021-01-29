import React, { useState } from 'react';
import './App.css';

function App() {
  const [isCancelled, setIsCancelled] = useState(false);

  let bruh = new Audio('/bruh.mp3');

  function getCancelled() {
    bruh.play();
    setIsCancelled(true);
  }

  return (
    <div className={(isCancelled) ? "App-cancelled" : "App"}>
      <button onClick={getCancelled} className={(isCancelled) ? 'Cancelled-button' : 'Cancel-button'}>
        {(isCancelled) ? 'CANCELLED, BITCH' : 'GET CANCELLED'}
      </button>
    </div>
  );
}

export default App;
