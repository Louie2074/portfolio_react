import React from 'react';
import './styles/App.css'; // Make sure to create an App.css file for your CSS
import Header from './components/Header';
import Body from './components/Body';
 import { Particle } from 'jparticles';
 import { useEffect } from 'react';

function App() {
    useEffect(() => {
      new Particle('#particle-container', {
        range: 0,
        num: 0.1,
        minSpeed: 0.01,
        maxSpeed: 0.05,
        minR: 2.2,
        maxR: 5,
        color: ['#fff888', '#f9cd76', '#f7b26e', '#d5d02c'],
      });
      // Empty dependency array to run only once after the initial render
    }, []);

  return (
    <div className="flex-container">
      <div
        id="particle-container"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      ></div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
