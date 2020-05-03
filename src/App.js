import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper />
    </div>
  );
}

export default App;
