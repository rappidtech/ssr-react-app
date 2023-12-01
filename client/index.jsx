import App from '../components/Home';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';

hydrateRoot(document.getElementById('root'), <App />);