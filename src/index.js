import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./i18n";  
import { Suspense } from "react";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
