import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { QuizQuestionsContextProvider, ToastContextProvider, UserContextProvider } from './context';


ReactDOM.render(
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
  document.getElementById('root')
);

