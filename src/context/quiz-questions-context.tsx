import React, { createContext , useContext , useReducer } from "react";
import { IntialState , Action , ChildrenType } from "./quizQuestions.types";

const QuizQuestionsContext = createContext({});

const useQuizQuestionsContext = () => useContext(QuizQuestionsContext);


const QuizQuestionsContextProvider = ({children}: ChildrenType) => {


    const initialState: IntialState = {
        type:'none' ,
        payload:[] ,
        score : 0 ,
        userAnswers: []
    }
    
   function questionReducer(accu:IntialState , action:Action){
    switch(action.type){
        case 'QUESTIONS':
            return {...accu ,type: action.type , payload: action.payload , score:0 }

        case 'UPDATE_SCORE':
            return {...accu ,type: action.type , payload: action.payload , score : action.score}
        
        case 'USER_ANSWERS':
            return {...accu , type: action.type , userAnswers : action.userAnswers }

        default : 
           return {...accu}
    }
}

const [quizQuestionsState , quizQuestionsDispatch] = useReducer(questionReducer , initialState );

    
    return (<QuizQuestionsContext.Provider value={{ quizQuestionsState, quizQuestionsDispatch }} >{children}:React.FC</QuizQuestionsContext.Provider>)
}

export { useQuizQuestionsContext , QuizQuestionsContextProvider }