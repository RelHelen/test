import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//https://reactrouter.com/en/main/router-components/browser-router
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    // <React.StrictMode >
    //     <App/>
    // </React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
)