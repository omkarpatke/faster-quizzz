import React from 'react';
import './QuizPage.css';

export default function QuizPage() {
  return (
    <>
    <div className="quiz-container">
      <div className="quizz-cart">
      <div className="question">Question</div>
      <div className="answer-options">
        <p>option1</p>
        <p>option2</p>
        <p>option3</p>
        <p>option4</p>
      </div>
      <button>Next</button>
      </div>
    </div>
    </>
  )
}
