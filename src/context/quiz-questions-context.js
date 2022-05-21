import { createContext , useContext , useReducer } from "react";


const QuizQuestionsContext = createContext('');

const useQuizQuestionsContext = () => useContext(QuizQuestionsContext);



const QuizQuestionsContextProvider = ({children}) => {
    
   const questionReducer = (accu , action) => {
    switch(action.type){
        case 'QUESTIONS':
            return {...accu ,type: action.type , payload: action.payload , score:0 }

        case 'NEW_QUESTIONS':
            return {...accu ,type: action.type , payload: action.payload , score : 0}

        case 'UPDATE_SCORE':
            return {...accu ,type: action.type , payload: action.payload , score : action.score}

        default : 
           return {...accu}
    }
}

const [quizQuestionsState , quizQuestionsDispatch] = useReducer(questionReducer , {type:'none' , payload:[] , score : 0})
    
    return (<QuizQuestionsContext.Provider value={{ quizQuestionsState , quizQuestionsDispatch }} >{children}</QuizQuestionsContext.Provider>)
}

export { useQuizQuestionsContext , QuizQuestionsContextProvider }