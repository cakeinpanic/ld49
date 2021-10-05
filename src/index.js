import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
      <defs>
        <filter id="squiggly-0">
          <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="0"/>
          <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="2"/>
        </filter>
        <filter id="squiggly-1">
          <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="1"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
        </filter>
        <filter id="squiggly-2">
          <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="2"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
        </filter>
        <filter id="squiggly-3">
          <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="3"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
        </filter>
        <filter id="squiggly-4">
          <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="4"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
        </filter>
      </defs>
    </svg>
  </React.StrictMode>,
  document.getElementById('root')
);
//document.getElementById('root').classList.add('light');
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
