import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizQuestionsContext } from '../../context/quiz-questions-context';
import './QuizPage.css';

export default function QuizPage() {
  const { quizQuestionsState , quizQuestionsDispatch } = useQuizQuestionsContext(); 
  const [ count , setCount ] = useState(0); 
  const [ finalScore , setScore ] = useState(0); 
  const navigate = useNavigate();

  

  const optionHandler = (e, CurrectAnswer) => {
    if(e.target.innerText ===  CurrectAnswer){
      setCount(prev => prev + 1);
      setScore(prev => prev + 2);
    }else{
      setCount(prev => prev + 1);
    }

    if(count === 4){
      navigate('/quiz-result');
      quizQuestionsDispatch({type : 'UPDATE_SCORE' , payload : quizQuestionsState.payload ,score: finalScore  } )
      console.log(quizQuestionsState , finalScore)
    }
  }


  
  return (
    <>
    <div className="quiz-container">
      <div className="quizz-cart">
      <h2 className="question">
        {quizQuestionsState.payload[count].Ques}
      </h2>
      <div className='questionNumber'>{count + 1 } / 5  <span>Score : {finalScore}</span></div>
      <div className="options">
        {quizQuestionsState.payload[count].option.map((item , index) => (
          <div className="option" onClick={(e) => optionHandler(e , quizQuestionsState.payload[count].ans )} key={index}>{item}</div>
        ))}
      </div>  
      </div>
    </div>
    </>
  )
}
