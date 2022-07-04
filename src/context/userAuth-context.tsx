import { createContext , useState , useContext, useEffect } from "react";
import { ChildrenType } from "./quizQuestions.types";



const UserContext = createContext({});
const useUserAuth = () => useContext(UserContext);



const UserContextProvider = ({children}:ChildrenType) => {
    const [isLogIn , setIsLogIn] = useState(false);

    useEffect(() => {
       if(localStorage.getItem('token')){
           setIsLogIn(true);
       }else{
           setIsLogIn(false);
       }
    },[])

    


    return (<UserContext.Provider value={{ isLogIn , setIsLogIn }}>{children}</UserContext.Provider>)
}

export { useUserAuth , UserContextProvider }