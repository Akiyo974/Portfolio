import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = document.getElementById('root');
const basename = import.meta.env.MODE === 'production' ? '/portfolio' : '/';

if (root) {
  createRoot(root).render(
    <StrictMode>
      <HashRouter basename={basename}>
        <App />
      </HashRouter>
    </StrictMode>
  );
}