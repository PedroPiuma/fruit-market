import * as React from "react";
import "./index.css";
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App tab="home" />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>

);

reportWebVitals();
