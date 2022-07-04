import React from 'react';
import { useQuizQuestionsContext } from '../../context';
import './ResultPage.css';

export function ResultPage() {
    const  quizQuestionsState  = useQuizQuestionsContext();

  return (
    <>
    <div className='result-page-container'>
    <div className="result-cart">
    <h2>You Have Scored {quizQuestionsState.score} out of 10</h2>

    <div className="questions">
       {quizQuestionsState.payload.map((question , index) => (
           <>
           <div key={index} className='quizz-score-answers'>
           <h3>{question.Ques}</h3>
           <div className="options">
               {question.option.map((option , optionIndex) => (
                   <div key={optionIndex} className={question.ans === option ? 'currectAns' : quizQuestionsState.userAnswers.includes(option) ? 'userSelectedAnswer' : 'option' }>{option}</div>
               ))}
           </div>
           </div>
           </>
       ))}
      </div> 
    </div>
    </div>
    </>
  );
}
