import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './RulesPage.css';
import { useNavigate } from 'react-router-dom';
import { useToastContext } from '../../context';

export default function RulesPage() {
  const [ checkboxInput , setCheckboxInput ] = useState(false);
  const navigate = useNavigate();
  const notify = useToastContext();

  const goToQuizSection = () => {
    if(checkboxInput){
      navigate('/quiz');
    }else{
      notify('Please Accept terms & conditions!' , {type : 'warning'});
    }
  }

  return (
    <>
    <Navbar />
    <div className="rulesPage-container">
      <h4>Terms for: Quiz</h4>
      <h2>Concent:</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente consequuntur, impedit odio exercitationem velit amet id aperiam pariatur maxime consequatur facere. A, ex quo nobis ducimus dolor labore ratione soluta.</p>
      <h2>Cookies Information:</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolorem temporibus eum deleniti pariatur aperiam vitae non amet! Eveniet iste a id nihil fugiat nisi porro optio sunt exercitationem dicta!
      </p>
      <h2>Rules:</h2>
      <p>1: Total no. of Questions: 5</p>
      <p>2: 5 Minutes Required to Complete this Quiz.</p>
      <p>3: Each Question Contains 2 Marks.</p>
      <p>4: You will be Redirected to Result Page after completion of Quiz.</p>
      <div className="input-section">
      <input 
      type="checkBox" 
      value={checkboxInput}
      onChange={(e) => setCheckboxInput(e.target.checked)}></input>
      <span>  I agree, all the terms & conditions.</span>
      </div>
      
      <button className='btn primary-btn checkboxBtn' onClick={goToQuizSection}> Start Quiz... </button>
    </div>
    </>
  );
}
