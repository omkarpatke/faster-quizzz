import React from 'react';
import { cricketPoster } from './cricket-quiz-poster';
import './Home.css';
import HeroImg from '../../Images/quiz.png';
import { useNavigate } from "react-router-dom";
import { useUserAuth , useQuizQuestionsContext } from '../../context/index';

export default function Home() {
  const navigate = useNavigate();
  const { isLogIn } = useUserAuth();
  const { quizQuestionsState , quizQuestionsDispatch } = useQuizQuestionsContext();  
  console.log(quizQuestionsState);
  const Cricket = [
    {
      Ques: "Q1.  Who won the first ever Cricket World Cup in 1975?",
      option: ["A. Australia", "B. England", "C. India", "D. West Indies"],
      ans: "D. West Indies",
    },
    {
      Ques: "Q2. What is the largest cricket stadium in the world?",
      option: [
        "A. Eden Gardens",
        "B. Melbourne Cricket Club",
        "C. Lords",
        "D Narendra Modi Stadium",
      ],
      ans: "D Narendra Modi Stadium",
    },
    {
      Ques: "Q3. What is the nickname of Sachin Tendulkar?",
      option: [
        "A. The Little Genius",
        "B. The Little Master",
        "C. The God of Cricket",
        "D. Master Blaster",
      ],
      ans: "D. Master Blaster",
    },
    {
      Ques: "Q4. Who did England beat in the final of the 2019 Cricket World Cup?",
      option: ["A. Australia", "B. Shri Lanka", "C. New Zealand", "D. India"],
      ans: "C. New Zealand",
    },
    {
      Ques: "Q5. Kapil Dev did not play for India during the World Cup tournament held in?",
      option: ["A.1975", "B. 1979", "C. 1983", "D. 1987"],
      ans: "D. 1987",
    },
  ];


  const Football = [
    {
      Ques: "Q1. Which of the following country won Football world Cup maximum times?",
      option: ["A. Germany" ,"B. Italy", "C. Argentina" ,"D. Brazil"],
      ans: "D. Brazil",
    },
    {
      Ques: "Q2. Who among the following player scores highest number of goals in Footbal World Cup?",
      option: ["A. Jurgen Klinsmann","B. Meradona","C. Miroslave Klose","D. Pele",],
      ans: "C. Miroslave Klose",
    },
    {
      Ques: "Q3. Which of the following term is recognised as an early form of football by FIFA?",
      option: ["A. kemari","B. Episkyros","C. Cuju","D. Inuit",],
      ans: "B. Episkyros",
    },
    {
      Ques: "Q4. When was the first FIFA World Cup inaugurated?",
      option: ["A. 1930","B. 1931","C. 1932","D. 1933"],
      ans: "A. 1930",
    },
    {
      Ques: "Q5. Which of following team do not play in stripes?",
      option: ["A. Newcastle","B. Southampton","C. Tottenham Hotspur","D. Lincoln City",],
      ans: "C. Tottenham Hotspur",
    },
  ];

 const Basketball = [
    {
      Ques: "Q1.  What is it called when a player scores a point?",
      option: ["A. Goal","B. Touchdown","C. Home-run","D. A Basket",],
      ans: "D. A Basket",
    },
    {
      Ques: "Q2. How many players are allowed on the court for each team?",
      option: ["A. 4","B. 5","C. 6","D. 7",],
      ans: "B. 5",
    },
    {
      Ques: "Q3. How many players are on each team in total",
      option: ["A. 8","B. 9","C. 11","D. 12",],
      ans: "D. 12",
    },
    {
      Ques: "Q4. For how long is each team allowed to stay in possession of the ball before they must shoot?",
      option: ["A. 10 seconds","B. 20 Seconds","C. 24 Seconds","D. 35 Seconds",],
      ans: "C. 24 Seconds",
    },
    {
      Ques: "Q5. In which country is basketball a major sport?",
      option: ["A. Canada","B. United States of America","C. United Kingdom","D. Jamaica",],
      ans: "B. United States of America",
    },
  ];


  const scrollToTop = () => {
    window.scrollTo({
      top:'0',
      behavior:'smooth'
    })
  }

  const quizHandler = (quiz) => {
    if(isLogIn){
      quizQuestionsDispatch({type : 'QUESTIONS' , payload : quiz });
      navigate('/rulespage');
    }else{
      navigate('/login');
    }
  }


  return (
    <>
    <div className="homepage-container">
    <div className="hero-section">
      <div className="content">
        <h1 className='content-heading'>Welcome To the Faster quiz.</h1>
        <p className='content-desc'>Here we are giving you some sports related quizes <br /> you can check you sports knowlege here.</p>
        <a href="#quizes-section" className='btn primary-btn'>Go to Quizzes</a>
      </div>
      <img className='heroImg' src={HeroImg} alt="" />
    </div>

    <div className="quizes-section">
      <h1 className='heading'>Sports Quizes</h1>
    <div className="quiz-carts" id='quizes-section'>
      <div className="quiz-cart" onClick={() => quizHandler(Cricket)}>
          <div className='quiz-cart-container'>
          <img src={cricketPoster} alt='cricket-quiz-img'/>
          <div className='quiz-name'>Cricket Quiz</div>
          <div className="quiz-desc">Take a quiz to test yourself. <br /> 5 questions | 10 Marks</div>
          </div>
      </div>

      <div className="quiz-cart" onClick={() => quizHandler(Football)}>
          <div className='quiz-cart-container'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-ZU91PyjPPr5yIFYtFvsY4_33iOi43Dl2Q&usqp=CAU" alt="football-quiz-img" />
          <div className='quiz-name'>FootBall Quiz</div>
          <div className="quiz-desc">Take a quiz to test yourself. <br /> 5 questions | 10 Marks</div>
          </div>
      </div>

      <div className="quiz-cart" onClick={() => quizHandler(Basketball)}>
          <div className='quiz-cart-container'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkEKaQ-DonPBqNKJc4JKpaS1n0QbRCehNyg&usqp=CAU" alt="basketball-quiz-img" />
          <div className='quiz-name'>BasketBall Quiz</div>
          <div className="quiz-desc">Take a quiz to test yourself. <br /> 5 questions | 10 Marks</div>
          </div>
      </div>

      </div>
      <button className="icon-btn float-action-btn" onClick={scrollToTop}><i className="lni lni-arrow-up"></i></button>
      </div>
    </div>
    </>
  )
}
