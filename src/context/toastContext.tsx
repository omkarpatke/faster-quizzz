import { createContext , useContext } from "react";
import { toast } from "react-toastify";
import { ChildrenType } from "./quizQuestions.types";


const ToastContext = createContext({});

const useToastContext = () => useContext(ToastContext);



const ToastContextProvider = ({children}:ChildrenType) => {
    const notify = (msg:string , type:{}) => {
        toast(msg , type);
    }
    
    return (<ToastContext.Provider value={notify}>{children}</ToastContext.Provider>)
}

export { useToastContext , ToastContextProvider }