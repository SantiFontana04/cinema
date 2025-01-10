import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes';
import FavoritoProvider from './context/Favoritos';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <FavoritoProvider>
    <AppRoutes/>
    </FavoritoProvider>
    </BrowserRouter>
  </React.StrictMode>
);