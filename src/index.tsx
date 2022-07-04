import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { QuizQuestionsContextProvider, ToastContextProvider, UserContextProvider } from './context/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContextProvider>
      <UserContextProvider>
        <QuizQuestionsContextProvider>
          <App />
        </QuizQuestionsContextProvider>
      </UserContextProvider>
    </ToastContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
