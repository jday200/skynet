import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  <div>
      <form action="/save">
        <label>Username:</label>
        <input type="text" name="username"></input>
        <label>Password:</label>
        <input type="text" name="password"></input>
        <input type="submit"></input>
      </form>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
