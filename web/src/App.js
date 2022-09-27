import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiOnline, setApiOnline] = useState(false);
  useEffect(() => {
    fetch('/api/healthcheck')
      .then((res) => res.json())
      .then((res) => setApiOnline(res?.success))
      .catch(() => setApiOnline(false));
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        API is {apiOnline ? 'online' : 'offline'}
      </header>
    </div>
  );
}

export default App;
