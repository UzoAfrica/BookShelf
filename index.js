import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BookList from './component/BookList'
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './Context/ThemeContext';
import ContentContextProvider from './Context/ContentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ContentContextProvider>
      <BookList />
      </ContentContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
