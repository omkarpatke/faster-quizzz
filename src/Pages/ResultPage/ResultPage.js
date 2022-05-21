import React from 'react';
import { useQuizQuestionsContext } from '../../context';
import './ResultPage.css';

export function ResultPage() {
    const { quizQuestionsState } = useQuizQuestionsContext();
    console.log(quizQuestionsState)
  return (
    <>
    <div className='result-page-container'>
    <div className="result-cart">
    <h2>You Have Scored {quizQuestionsState.score} out of 10</h2>

    <div className="questions">
       {quizQuestionsState.payload.map(question => (
           <>
           <h4>{question.Ques}</h4>
           <div className="options">
               {question.option.map(option => (
                   <div className={question.ans === option ? 'currectAns' : 'option'}>{option}</div>
               ))}
           </div>
           </>
       ))}
      </div> 
    </div>
    </div>
    </>
  );
}
