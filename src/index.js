import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';


const App = () => {
  return "Hello DevOps!"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

