import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n/config';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </React.StrictMode>,
);
