import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// eslint-disable-next-line
import './util/i18n';
import App from './App';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
