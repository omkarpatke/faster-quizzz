import React from 'react';
import { cricketPoster } from './cricket-quiz-poster';
import './Home.css';
import HeroImg from '../../Images/quiz.png';



export default function Home() {

  const scrollToTop = () => {
    window.scrollTo({
      top:'0',
      behavior:'smooth'
    })
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
      <div className="quiz-cart">
          <div className='quiz-cart-container'>
          <img src={cricketPoster} alt='cricket-quiz-img'/>
          <div className='quiz-name'>Cricket Quiz</div>
          <div className="quiz-desc">Take a quiz to test yourself. <br /> 10 questions | 20 Marks</div>
          </div>
      </div>

      <div className="quiz-cart">
          <div className='quiz-cart-container'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-ZU91PyjPPr5yIFYtFvsY4_33iOi43Dl2Q&usqp=CAU" alt="football-quiz-img" />
          <div className='quiz-name'>FootBall Quiz</div>
          <div className="quiz-desc">Take a quiz to test yourself. <br /> 10 questions | 10 Marks</div>
          </div>
      </div>

      <div className="quiz-cart">
 
          <div className='quiz-cart-container'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkEKaQ-DonPBqNKJc4JKpaS1n0QbRCehNyg&usqp=CAU" alt="basketball-quiz-img" />
          <div className='quiz-name'>BasketBall Quiz</div>
          <div className="quiz-desc">Take a quiz to test yourself. <br /> 10 questions | 20 Marks</div>
          </div>

      </div>

      </div>
      <button className="icon-btn float-action-btn" onClick={scrollToTop}><i className="lni lni-arrow-up"></i></button>
      </div>
    </div>
    </>
  )
}
