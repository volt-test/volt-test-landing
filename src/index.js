import React from 'react';
import ReactDOM from 'react-dom/client';
import TagManager from 'react-gtm-module';
import './index.css';
import App from './App';

// Initialize Google Tag Manager
const tagManagerArgs = {
    gtmId: 'GTM-NCCBX5MK', // Replace with your GTM ID
};
TagManager.initialize(tagManagerArgs);

// Render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);