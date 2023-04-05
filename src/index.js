import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ReactDOM from 'react-dom/client';// render to a particular element in the DOM using the React DOM library
import './index.css';
import {Card}  from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Card/>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
