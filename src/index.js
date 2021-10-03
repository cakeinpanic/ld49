import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/css?family=Baloo+2:400,800" rel="stylesheet"/>
    <div className="light bg"/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//document.getElementById('root').classList.add('light');
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
