import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement('h1', {id: 'heading1'}, 'Namaste Everyone from React Parcel!');
const heading2 = React.createElement('h2', {id: 'heading2'}, 'Author, Ghanashri!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([heading1, heading2]);