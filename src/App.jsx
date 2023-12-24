import React from 'react';
import './App.css'; // Make sure to create an App.css file for your CSS
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div id='container'>
      <Header />
      <Body/>
    </div>
  );
}

export default App;
