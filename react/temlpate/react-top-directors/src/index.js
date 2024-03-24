import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import CompReducer from './components/CompReducer';

import CurrentTime from './components/currentTime';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CurrentTime/> */}
    <CompReducer/>
  </React.StrictMode>
);

 